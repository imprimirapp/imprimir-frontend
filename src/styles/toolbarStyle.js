
const toolbarStyle = theme => ({
    toolbar:{
        background: 'transparent', 
        boxShadow: 'none'
    },
    logo: {
        height: '40px',
        width: '200px'
    },
    buttonSignup: {
        margin: theme.spacing.unit,
        padding: '20px',
        backgroundColor: '#fff'
    },
    buttonLogin:{
        margin: theme.spacing.unit,
        padding: '20px',
        color: '#f2f2f2'
    },
    typography:{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: '2px',
        textTransform: 'capitalize'
    },
    typographyLogin:{
        fontFamily: 'Montserrat',
        fontWeight: 'regular',
        fontSize: 16,
        letterSpacing: '2px',
        color: '#fff',
        textTransform: 'capitalize'
    }
});

  export default toolbarStyle;