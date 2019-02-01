import styles from "./styles/styles.scss";
import "./services/core.module";
import "./app.components";

const appModule = angular.module('wooza-app', [
    'app.core',
    'ui.router',
    'app.home',
]);

export default appModule;