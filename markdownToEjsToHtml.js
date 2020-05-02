const fs = require('fs').promises;
const { promisify } = require('util')
const Markdown = require('markdown-it');
const Ejs = require('ejs');

const renderFile = promisify(Ejs.renderFile);

const md = new Markdown();

const markdownRegExp = /(.*).md$/;
const frontmatterRegExp = /^frontmatter_begin(.*)?frontmatter_end$/ms;

/*
{
    basepath: 'src/data',
    subfolders: [ 'categories' ],
    name: 'backend.md'
  }
*/
async function getFiles (basepath, subfolders = []) {
    try {
        
        const files = [];
        const folders = [];

        const completePath = `${basepath}/${subfolders.join('/')}`;

        const filesAndFolders = await fs.readdir(completePath, { encoding: 'utf8', withFileTypes: true });

        filesAndFolders.forEach(fileOrFolder => {
            if (fileOrFolder.isDirectory())
                folders.push(fileOrFolder);
            else {
                const match = markdownRegExp.exec(fileOrFolder.name);
                if (fileOrFolder.isFile() && !!match)
                    files.push({ basepath, subfolders, name: match[1] });
            }
        });

        for (const folder of folders) {
            files.push(... await getFiles(basepath, [ ...subfolders, folder.name ]))
        }

        return files
    } catch (error) {
        throw error;
    }
}

async function markdownToEjsToHtml (webpackConfig, ...options) {
    const [ pathToContents, pathToTemplates, pathToDist, ejsOptions ] = options;

    const contents = {
        timestamp: Date.now()
    };

    try {
        const sourceFilesPaths = await getFiles(pathToContents);

        for (const sourceFilePath of sourceFilesPaths) {
            let subfoldersPath = sourceFilePath.name;
            if (sourceFilePath.subfolders.length > 0)
                subfoldersPath = `${sourceFilePath.subfolders.join('/')}/${sourceFilePath.name}`;

            const sourceFile = await fs.readFile(`${pathToContents}/${subfoldersPath}.md`, { encoding: 'utf8' });

            const [ _, rawFrontmatter, rawMarkdown ] = sourceFile.split(frontmatterRegExp);
            const frontmatter = JSON.parse('{' + rawFrontmatter.trim() + '}');
            const markdown = md.render(rawMarkdown.trim());

            let pathToTemplate = `${pathToTemplates}/${subfoldersPath}`;

            if (frontmatter._template) {
                contents.page = frontmatter;
                contents.page.markdown = markdown;
                pathToTemplate = `${pathToTemplates}/${frontmatter._template}`;
            } else {
                contents[sourceFilePath.name] = frontmatter;
                contents[sourceFilePath.name].markdown = markdown;
            }

            const html = await renderFile(`${pathToTemplate}.ejs`, contents, ejsOptions);
            try {
                await fs.access(`${pathToDist}/${subfoldersPath}.html`);
            } catch (error) {
                await fs.mkdir(`${pathToDist}/${sourceFilePath.subfolders.join('/')}`, { recursive: true });
            } finally {
                await fs.writeFile(`${pathToDist}/${subfoldersPath}.html`, html);
            }
        }
        
    } catch (error) {
        console.error(error)
    }
};

// markdownToEjsToHtml('', 'src/data', 'src/views', 'dist', { rmWhitespace: true, partials: 'src/views/partials' })

// getFiles('src/data').then(paths => console.log(paths)).catch(e => console.log(e))

module.exports = markdownToEjsToHtml;