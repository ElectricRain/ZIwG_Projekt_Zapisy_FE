import { AppBar, Grid, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFFFFF',
        transform: 'translateZ(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '1.2rem',
        '& : hover' : {
            backgroundColor: '#F2F2F2'
        },
        '& .MuiSvgIcon-root' : {
            marginRight: '16px'
        }

    }
})

export default function Header() {
    
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems='center'>
                    {/* <Grid item>
                        <InputBase className={classes.searchInput} 
                        placeholder='Wyszukaj'
                        startAdornment={<SearchIcon></SearchIcon>}
                        />
                    </Grid> */}
                    <Grid item sm>

                    </Grid>
                    {/* <Grid item>
                        <IconButton>
                            <MeetingRoomIcon />
                        </IconButton>
                    </Grid> */}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
