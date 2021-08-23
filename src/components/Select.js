/*
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Link } from '@material-ui/core';
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
import News from './News';
import { NewscontextProvider } from '../NewsContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    whiteSpace: 'normal',
    fontSize: 20,
    fontWeight: 'fontWeightBold',
    fontFamily: 'Gill Sans', 
    color: theme.palette.text.primary
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(255, 255, 255 ,1) 0%, rgba(255, 255, 255 ,0.6) 70%, rgba(255, 255, 255 ,0) 100%)',
    
    
  },
}));

const News1 = () => {
    <NewscontextProvider>
      <News />
    </NewscontextProvider>
}

export default function SingleLineImageList() {
  const classes = useStyles();

  const itemData = [
    {
       img: image1,
       title: '貧困を無くそう',
       link: '/Newsjs' 
    },
    {
        img: image2,
        title: '飢餓をゼロに',
     },
     {
        img: image3,
        title: '全ての人に健康と福祉を',
     },
     {
        img: image4,
        title: '質の高い教育をみんなに',
     },
     {
        img: image5,
        title: 'ジェンダー平等を実現しよう',
     },
     {
        img: image6,
        title: '安全な水とトイレを世界中に',
     },
     {
        img: image7,
        title: 'エネルギーをみんなにそしてクリーンに',
     },
     {
        img: image8,
        title: '働きがいも経済成長も',
     },
    ];

    const itemData1 = [
        
     {
        img: image9,
        title: '産業と技術革新の基盤を作ろう',
     },
     {
        img: image10,
        title: '人や国の不平等を無くそう',
     },
     {
        img: image11,
        title: '住み続けられるまちづくり',
     },
     {
        img: image12,
        title: '作る責任　使う責任',
     },
     {
        img: image13,
        title: '気候変動に具体的な対策を',
     },
     {
        img: image14,
        title: '海の豊かさを守ろう',
     },
     {
        img: image15,
        title: '陸の豊かさも守ろう',
     },
     {
        img: image16,
        title: '平和と公正を全ての人に',
     },
     {
        img: image17,
        title: 'パートナーシップで目標を達成しよう',
     },
    
   ];

  return (
    <Link href={itemData.limk}>
    <div className={classes.root}>
      <ImageList className={classes.imageList} cellHeight={300} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Link>

      <ImageList className={classes.imageList} cellHeight={300} cols={4}>
        {itemData1.map((item) => (
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
        
      </ImageList>
    </div>
    
  );
}
*/