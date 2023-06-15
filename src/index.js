import TemplateDefault from './template/Default'
import { Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonAdd:{
    margin: '30px 6px',
  },


}))

export default function Home () {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          SnapShot
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Montanha
        </Button>
        <Button variant="contained" color="primary"className={classes.buttonAdd}>
          Praia
        </Button>
        <Button variant="contained" color="primary"className={classes.buttonAdd}>
          Pássaros
        </Button>
        <Button variant="contained" color="primary"className={classes.buttonAdd}>
          Comida
        </Button> 
      </Container>
    </TemplateDefault>
  )
}