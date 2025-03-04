
import { createTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createTheme({
    palette: {
        primary: {
            main: amber[800],
        },
        secondary: {
            main: lightBlue[800],
        },
    },
    colors:{
        bgColor: '#3e3e3e',
        bgLightColor: '#888',
        bgLighterColor: '#DADADA',
        mainAccentColor: '#fecc01',
    }
});

export default theme;