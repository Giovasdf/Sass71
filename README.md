 # Sass71

 Sass71 is a Visual Studio Code extension that generates a predefined Sass folder and file structure. It includes the creation of partial files with names starting with an underscore and sets up the main `main.scss` file with imports for each of these partial files.

 ## Features

 ### Creates the following folders in the selected directory:

 ```
 assets/sass/abstracts
 assets/sass/base
 assets/sass/components
 assets/sass/layout
 assets/sass/pages
 assets/sass/themes
 assets/sass/vendors
 ```

 ### Inside each folder, it creates the corresponding partial files:

 - **abstracts**: `_variables.scss`, `_functions.scss`, `_mixins.scss`, `_placeholders.scss`
 - **base**: `_reset.scss`, `_typography.scss`
 - **components**: `_buttons.scss`, `_carousel.scss`, `_cover.scss`, `_dropdown.scss`
 - **layout**: `_navigation.scss`, `_grid.scss`, `_header.scss`, `_footer.scss`, `_sidebar.scss`, `_forms.scss`
 - **pages**: `_home.scss`, `_contact.scss`
 - **themes**: `_theme.scss`, `_admin.scss`
 - **vendors**: `_bootstrap.scss`, `_jquery-ui.scss`

 ### Creates a `main.scss` file in `assets/sass` with the following imports:

 ```scss
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
 ```

 ## Usage

 1. **Open VSCode and load the extension.**
 2. **Use the Command Palette** (`Ctrl+Shift+P`) and search for `Create Sass Structure`.
 3. **Select the folder** where you want to create the Sass structure.

 ## Installation

 To install Sass71, follow these steps:

 1. **Clone the repository:**

    ```bash
    git clone https://github.com/Giovasdf/Sass71.git
    ```

 2. **Navigate to the project directory:**

    ```bash
    cd Sass71
    ```

 3. **Install dependencies:**

    ```bash
    npm install
    ```

 4. **Compile the extension:**

    ```bash
    npm run compile
    ```

 5. **Launch the extension:**

    Press `F5` in VSCode to open a new window with the extension loaded.

 ## Contributing

 Contributions are welcome! Please follow these steps to contribute:

 1. **Fork the repository.**
 2. **Create a new branch:**

    ```bash
    git checkout -b feature/YourFeature
    ```

 3. **Commit your changes:**

    ```bash
    git commit -m "Add your feature"
    ```

 4. **Push to the branch:**

    ```bash
    git push origin feature/YourFeature
    ```

 5. **Open a pull request** on GitHub.

 ## License

 This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

 ## Contact

 For any questions or suggestions, feel free to open an issue on the [GitHub repository](https://github.com/Giovasdf/Sass71.git).