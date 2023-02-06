import { ThemeType } from '@themes'

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}