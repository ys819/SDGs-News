import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    margin: 10,
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    Width: 1000,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: 128,
    maxHeight: 130,
    margin: 'auto',
    
    
  },
}));

export default function NewsArticle17({ data }) {
  const classes = useStyles();
  

  return (
    <Link href={data.url} underline="hover" >
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} alt="complex"  src={data.urlToImage} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {data.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {data.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {data.author}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                {data.publishedAt}
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
    </Link>
    
  );
}
