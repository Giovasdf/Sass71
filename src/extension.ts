import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('sass71.createSassStructure', async (uri: vscode.Uri) => {
        if (!uri) {
            vscode.window.showErrorMessage('Por favor, selecciona una carpeta.');
            return;
        }

        const basePath = uri.fsPath;

        const sassFolders = [
            'assets/sass/abstracts',
            'assets/sass/base',
            'assets/sass/components',
            'assets/sass/layout',
            'assets/sass/pages',
            'assets/sass/themes',
            'assets/sass/vendors'
        ];

        const sassFiles: { [key: string]: string[] } = {
            'abstracts': ['_variables.scss', '_functions.scss', '_mixins.scss', '_placeholders.scss'],
            'base': ['_reset.scss', '_typography.scss'],
            'components': ['_buttons.scss', '_carousel.scss', '_cover.scss', '_dropdown.scss'],
            'layout': ['_navigation.scss', '_grid.scss', '_header.scss', '_footer.scss', '_sidebar.scss', '_forms.scss'],
            'pages': ['_home.scss', '_contact.scss'],
            'themes': ['_theme.scss', '_admin.scss'],
            'vendors': ['_bootstrap.scss', '_jquery-ui.scss']
        };

        // Crear carpetas
        sassFolders.forEach(folder => {
            const folderPath = path.join(basePath, folder);
            fs.mkdirSync(folderPath, { recursive: true });
        });

        // Crear archivos parciales
        Object.keys(sassFiles).forEach(folder => {
            const folderPath = path.join(basePath, `assets/sass/${folder}`);
            sassFiles[folder].forEach(file => {
                const filePath = path.join(folderPath, file);
                fs.writeFileSync(filePath, `// ${file}`);
            });
        });

        // Crear el archivo main.scss con importaciones
        const mainScssPath = path.join(basePath, 'assets/sass/main.scss');
        const mainScssContent = `
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
        `;
        fs.writeFileSync(mainScssPath, mainScssContent.trim());

        vscode.window.showInformationMessage('Estructura Sass creada correctamente.');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
