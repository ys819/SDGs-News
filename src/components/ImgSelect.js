import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image1 from './itemData/img01.jpg'
import image2 from './itemData/img02.jpg'
import image3 from './itemData/img03.jpg'
import image4 from './itemData/img04.jpg'
import image5 from './itemData/img05.jpg'
import image6 from './itemData/img06.jpg'
import image7 from './itemData/img07.jpg'
import image8 from './itemData/img08.jpg'
import image9 from './itemData/img09.jpg'
import image10 from './itemData/img10.jpg'
import image11 from './itemData/img11.jpg'
import image12 from './itemData/img12.jpg'
import image13 from './itemData/img13.jpg'
import image14 from './itemData/img14.jpg'
import image15 from './itemData/img15.jpg'
import image16 from './itemData/img16.jpg'
import image17 from './itemData/img17.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 300,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


   
 
export default function ImgSelect() {
  const classes = useStyles();

  const itemData = [
    {
       img: image1,
       title: 'Image',
       author: 'author',
    },
    {
        img: image2,
        title: 'Image',
        author: 'author',
     },
     {
        img: image3,
        title: 'Image',
        author: 'author',
     },
     {
        img: image4,
        title: 'Image',
        author: 'author',
     },
     {
        img: image5,
        title: 'Image',
        author: 'author',
     },
     {
        img: image6,
        title: 'Image',
        author: 'author',
     },
     {
        img: image7,
        title: 'Image',
        author: 'author',
     },
     {
        img: image8,
        title: 'Image',
        author: 'author',
     },
     {
        img: image9,
        title: 'Image',
        author: 'author',
     },
     {
        img: image10,
        title: 'Image',
        author: 'author',
     },
     {
        img: image11,
        title: 'Image',
        author: 'author',
     },
     {
        img: image12,
        title: 'Image',
        author: 'author',
     },
     {
        img: image13,
        title: 'Image',
        author: 'author',
     },
     {
        img: image14,
        title: 'Image',
        author: 'author',
     },
     {
        img: image15,
        title: 'Image',
        author: 'author',
     },
     {
        img: image16,
        title: 'Image',
        author: 'author',
     },
     {
        img: image17,
        title: 'Image',
        author: 'author',
     },
     
    
   ];

  return (
            
    <div className={classes.root}>
      <ImageList  rowHeight={200} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList  rowHeight={200} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
