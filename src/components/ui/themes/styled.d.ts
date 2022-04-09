// import original module declarations
import 'styled-components';
import { ColorThemeInterface } from './color';
import { ShadowThemeInterface } from './shadow';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme
    extends ShadowThemeInterface, ColorThemeInterface {
    
  }
}