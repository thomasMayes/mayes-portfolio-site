import {IconButton, Grid, Typography, Link} from "@material-ui/core";

export const Navbar = ()=>{
    return(
        <Grid container justify='center'>
            <Grid item container xs={4}>
                <Grid container justify ='center'item xs={3}>
                    <Typography >
                        <Link href="/tttt" color='textPrimary'>
                        Resume
                        </Link>
                    </Typography>
                </Grid>
                <Grid container justify ='center'item xs={3}>
                    <Typography >
                        <Link href="/tttt">
                        Projects
                        </Link>
                    </Typography>
                </Grid>
                <Grid container justify ='center' item xs={3}>
                    <Typography >
                        <Link href="/tttt">
                        Github
                        </Link>
                    </Typography>
                </Grid>
                <Grid container justify ='center' item xs={3}>
                    <Typography >
                        <Link href="/tttt">
                       Contact
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
            
        </Grid>
    )
}