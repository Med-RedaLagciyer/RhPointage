# OFA
OFA (One For All) is a dashboard template for symfony apps.

## Installation

After cloning the project from the git repository run the following commands:

```bash
composer install
```
```bash
yarn install
```
```bash
npm install
```

## Important commands for dev

For generating routes (js-routing):

```bash
php bin/console fos:js-routing:dump --format=json --target=public/js/fos_js_routes.json
```

## License

This project uses the Tabler Dashboard Template, which is licensed under the MIT license. The template has been customized to fit the needs of this application. All original Tabler code remains under the MIT license, and modifications made for this project adhere to the same licensing terms.

For more details on the MIT license, please see the LICENSE file or refer to the official Tabler GitHub repository for the original source and licensing terms.