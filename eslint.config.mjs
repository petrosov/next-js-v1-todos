import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Отключить предупреждения о неиспользуемых переменных
      "@typescript-eslint/no-explicit-any": "off", // Отключить предупреждения о использовании `any`
      "react/no-unescaped-entities": "off", // Отключить проверку на неэкранированные символы
    },
  },
]

export default eslintConfig
