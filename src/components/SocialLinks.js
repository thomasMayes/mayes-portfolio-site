import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {IconButton, Grid} from "@material-ui/core";
export const SocialLinks = ()=>{
    return (
<Grid container justify={'center'} align={'center'}>
<IconButton aria-label="gitHub.com" onClick={() => window.open('https://github.com/thomasMayes')} >
    <GitHubIcon style={{fontSize: '44px'}}/>
</IconButton>
<IconButton>
    <LinkedInIcon style={{fontSize: '44px'}} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/thomas-mayes')}/>
</IconButton>
<IconButton>
    <FacebookIcon style={{fontSize: '44px'}} aria-label="facebook.com" onClick={() => window.open('https://www.facebook.com/thomas.mayes.752/')}/>
</IconButton>
<IconButton>
    <InstagramIcon style={{fontSize: '44px'}} aria-label="instagram.com" onClick={() => window.open('https://www.instagram.com/wizard_mayes/')}/>
</IconButton>
</Grid>
    )
}