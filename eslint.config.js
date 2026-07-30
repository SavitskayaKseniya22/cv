import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

export default defineConfig([
    globalIgnores([
        ".next/**",
        "node_modules/**",
    ]),
    ...nextVitals,
    ...tseslint.configs.recommended,
    prettier,
]);