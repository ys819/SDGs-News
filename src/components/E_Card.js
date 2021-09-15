import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import img01 from './itemData/img01.jpg'
import img02 from './itemData/img02.jpg'
import img03 from './itemData/img03.jpg'
import img04 from './itemData/img04.jpg'
import img05 from './itemData/img05.jpg'
import img06 from './itemData/img06.jpg'
import img07 from './itemData/img07.jpg'
import img08 from './itemData/img08.jpg'
import img09 from './itemData/img09.jpg'
import img10 from './itemData/img10.jpg'
import img11 from './itemData/img11.jpg'
import img12 from './itemData/img12.jpg'
import img13 from './itemData/img13.jpg'
import img14 from './itemData/img14.jpg'
import img15 from './itemData/img15.jpg'
import img16 from './itemData/img16.jpg'
import img17 from './itemData/img17.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 10,
    padding: theme.spacing(2),
    alignContent: 'flex-start',
    maxWidth: '100%',
  },
  
  img: {
    margin: 'auto',
    display: 'block',
    [theme.breakpoints.down('xs')]: {
        maxWidth: '90%',
        maxHeight: '95%',
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: '90%',
        maxHeight: '95%',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '300px',
        maxHeight: '95%',
      },
  },
  title: {
    fontWeight: 'bold',
    color: '#3f51b5',
    [theme.breakpoints.down('xs')]: {
        fontSize: '20px'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '40px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '45px'
  },
},
author: {
    fontWeight: 'inherit',
    [theme.breakpoints.down('xs')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '35px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '40px'
  },
},
formcontrollabel: {
  [theme.breakpoints.up('lg')]: {
    
},
},
}));






export default function E_Card() {
  const classes = useStyles();  
  const [state, setState] = React.useState({
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  
  


  return (
    <div className={classes.root} aligncontent='flex-start' >
      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img01} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                あらゆる場所のあらゆる形態の貧困を終わらせる
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel className="formcontrollabel" 
                    control={<Switch   checked={state.checked} onChange={handleChange('checked')} />}
                    label={state.checked ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    >
                      </FormControlLabel>
                    <Slide className="transitione" direction="up" in={state.checked} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                世界の貧困率は 2000 年以来、半分以下に低下しました。しかし、新型コロナウイルス感染症により、世界の貧困はこの数十年で初めて増加しています。世界人口の10％にあたる7億人以上が今日でも極度の貧困状態にあり、1 日1 ドル 90 セントという国際貧困ライン未満で家族と暮らしています。貧困とは、単に持続可能な生計を確保するための所得と資源がないことではありません。貧困は飢餓や栄養不良、教育その他基本的サービスの利用制約、社会的差別と排除、さらには意思決定への不参加など、数多くの形となって表れます。経済成長を包摂的なものとし、持続可能な雇用を提供し、平等を促進することが必要です。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img02} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                飢餓を終わらせ、食料安全保障及び栄養改善を実現し、持続可能な農業を促進する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked1} onChange={handleChange('checked1')} />}
                    label={state.checked1 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked1} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                世界食糧計画によると、1億3500万人が、主に人為的な紛争、気候変動、景気後退により深刻な飢餓に苦しんでいます。それに加え、新型コロナウイルス感染症が食料システムに対する新たな脅威にもなっています。食料不安の影響を受け子どもたちが発育不良と消耗性疾患に陥っていますが、この状況下で悪化する可能性もあります。現時点で空腹を抱える6 億9千万人に加え、さらに 2050 年までに増加が見込まれる 20 億人に食料を確保するためには、グローバルな食料と農業のシステムを根本的に変える必要があります。農業生産性を高める能力の強化には、農業への投資が欠かせないほか、持続可能な食料生産システムも必要です。
                世界の貧困率は 2000 年以来、半分以下に低下しました。しかし、新型コロナウイルス感染症により、世界の貧困はこの数十年で初めて増加しています。世界人口の10％にあたる7億人以上が今日でも極度の貧困状態にあり、1 日1 ドル 90 セントという国際貧困ライン未満で家族と暮らしています。貧困とは、単に持続可能な生計を確保するための所得と資源がないことではありません。貧困は飢餓や栄養不良、教育その他基本的サービスの利用制約、社会的差別と排除、さらには意思決定への不参加など、数多くの形となって表れます。経済成長を包摂的なものとし、持続可能な雇用を提供し、平等を促進することが必要です。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img03} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を促進する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked2} onChange={handleChange('checked2')} />}
                    label={state.checked2 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked2} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を推進することは、持続可能な開発に欠かせません。現在、世界は他に類を見ない世界的な健康危機に直面しています。コロナ禍以前には妊産婦や小児の保健分野などで前進がみられましたが、幅広い疾病を全面的に根絶させ、新旧の多種多様な健康問題に対処するためには、さらに多くの取り組みが必要とされています。保険制度のより効率的な財源確保、衛生施設と衛生状態の改善、医療へのアクセス拡大、環境汚染の削減方法へのヒントの提供に焦点を当てることにより、数百万人の命を救うための支援を大幅に前進させることができます。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img04} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                すべての人々への、包摂的かつ公正な質の高い教育を提供し、生涯学習の機会を促進する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked3} onChange={handleChange('checked3')} />}
                    label={state.checked3 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked3} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                過去 10 年間で、あらゆるレベルで教育を受ける機会の改善と、特に女性と女児の就学率向上に、大きな前進が達成されました。しかし、2018年時点で学校に通えていない子どもは 2 億 6,000 万人に上ります。これはその年齢層の世界人口のほぼ5分の1です。また、学校に通えている子どもでも、基本的な識字・算術能力が欠けています。質の高い教育が欠けている理由には、十分な訓練を受けた教員の不足、校舎の劣悪な状況、農村部の子どもに提供される機会の公平性の問題があります。そして、所得による学校教育の修了率の格差や、オンライン教育を受けられない児童・生徒の問題など、新型コロナウイルス感染症により教育面での不平等はさらに拡大する恐れがあります。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img05} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                ジェンダー平等を達成し、すべての女性及び女児の能力強化を行う
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked4} onChange={handleChange('checked4')} />}
                    label={state.checked4 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked4} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                ジェンダーの平等は基本的人権であるだけでなく、平和かつ豊かで持続可能な世界に必要な基盤でもあります。早婚を強いられる女児は減少し、より多くの女児が学校に通い、リーダーシップの役割を担う女性は増加しました。しかし、全面的なジェンダー平等には依然として届いていません。女性と女児に教育や医療、ディーセント・ワーク（働きがいのある人間らしい仕事）への平等な機会を提供し、政治的・経済的意志決定プロセスへの参画を可能にすれば、持続可能な経済が促進され、社会と人類全体に利益が及ぶことでしょう。職場での男女平等と、女性に対する有害な慣行の根絶に関し、新たな法的枠組みを導入することは、全世界の多くの国で広く見られるジェンダーに基づく差別に終止符を打つうえで欠かせません。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img06} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                すべての人々の水と衛生の利用可能性と持続可能な管理を確保する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked5} onChange={handleChange('checked5')} />}
                    label={state.checked5 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked5} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                世界では、今だ数十億人が安全に管理された飲料水と衛生サービスを利用できていません。劣悪な経済情勢やインフラの不備により、数百万人が不適切な給水、衛生施設、衛生状態に関連する病気で命を落としています。水不足や水質の悪化、不適切な衛生施設は、全世界の貧困家庭における食料の安定確保や生活手段の選択、教育機会に悪影響を及ぼしています。また、世界の最貧国の一部を襲っている干ばつは、飢餓と栄養不良を悪化させています。衛生的な水を使うことのできる手洗い設備の利用は感染症予防に効果的な行動をとるためにも重要なことです。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img07} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                すべての人々の、安価かつ信頼できる持続可能な近代的エネルギーへのアクセスを確保する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked6} onChange={handleChange('checked6')} />}
                    label={state.checked6 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked6} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                エネルギーへの普遍的アクセス、エネルギー効率の改善、新たな経済と雇用の機会を通じた再生可能エネルギーの利用拡大に注力することは、より持続可能で包摂的なコミュニティーをつくり、気候変動をはじめとする環境問題に対するレジリエンスを高めるうえで欠かせません。しかし、現時点で、およそ 30 億人がクリーンな調理用燃料を利用できず、危険なレベルの空気汚染にさらされています。クリーン燃料とクリーン技術へのアクセスを拡大するとともに、建物や輸送、産業における再生可能エネルギーの取り組みをさらに強化する必要があります。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img08} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                包摂的かつ持続可能な経済成長及びすべての人々の完全かつ生産的な雇用と働きがいのある人間らしい雇用(ディーセント・ワーク)を促進する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked7} onChange={handleChange('checked7')} />}
                    label={state.checked7 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked7} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                持続可能な経済成長を遂げるためには、経済を刺激し、環境に害を及ぼさない質の高い仕事に人々が就けるよう整備することが必要です。また、所得を管理し、資産を蓄積し、生産的な投資を行うためには、金融サービスへの利用を拡大する必要があります。世界の最貧地域では、貿易や金融、農業インフラ整備を強化することも、生産性の向上と失業の減少に役立つでしょう。現在は、新型コロナウイルス感染症により、世界は大恐慌以来、最悪の景気後退に直面しています。ディーセント・ワーク（働きがいのある人間らしい仕事）の機会の継続が難しいだけでなく、インフォーマル経済で働く16億人の労働者が生計を失うおそれがあります。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img09} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                強靱（レジリエント）なインフラ構築、包摂的かつ持続可能な産業化の促進及びイノベーションの推進を図る
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked8} onChange={handleChange('checked8')} />}
                    label={state.checked8 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked8} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                生産性と所得の向上や、健康・教育面での成果改善にはインフラへの投資が必要です。製造業は経済開発と雇用の重要な牽引役です。特に途上国では製造業の発展を加速し、科学研究とイノベーションへの投資を拡大する必要があります。技術の進歩は、資源効率と省エネの向上をはじめとする環境目標の達成に向けた取り組みの基盤となります。技術とイノベーションがなければ、産業化は起こり得ず、産業化がなければ開発も実現しません。コロナ禍により災害や気候変動に対してレジリエントなインフラの必要性、通信インフラの更なる拡充が重要であると認識されました。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img10} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                各国内及び各国間の不平等を是正する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked9} onChange={handleChange('checked9')} />}
                    label={state.checked9 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked9} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                国際社会は、人々の貧困脱出に向け、長足の進歩を遂げてきました。いくつかの国では所得の不平等は改善の兆候もありますが、不平等は依然として続いています。そして、高齢者、障がい者、子供、女性、移民・難民など最も脆弱な立場に置かれた人々がコロナ禍による打撃を最も受けています。世界的な景気後退によって途上国への開発援助が目減りするおそれもあります。不平等を是正するためには、こうした人々のニーズに配慮しつつ、普遍的な政策を採用すべきです。国際通貨基金（IMF）で開発途上国が投じる票の割合を増やすことに加え、開発途上国からの輸出品に対する免税措置を広げ、優遇を続ける必要があります。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img11} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                包摂的で安全かつ強靱（レジリエント）で持続可能な都市及び人間居住を実現する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked10} onChange={handleChange('checked10')} />}
                    label={state.checked10 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked10} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                2030 年までに、都市住民の数は 50 億人に増えると予測される中で、都市化がもたらす課題に対処するため、効率的な都市計画・管理実践の導入が重要となっています。雇用と豊かさを生み出しながら、土地や資源に負担をかけないように都市を維持するためには、多くの課題が存在します。共通に見られる都市問題としては、過密、基本的サービスを提供するための資金欠如、適切な住宅の不足、インフラの劣化、都市内部の大気汚染の悪化が挙げられます。都市内部の固形廃棄物の安全な除去と管理など、急速な都市化がもたらす課題は、都市の繁栄と成長を継続しながら、資源利用を改善し、汚染と貧困を削減できる方法で克服できます。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img12} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                持続可能な生産消費形態を確保する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked11} onChange={handleChange('checked11')} />}
                    label={state.checked11 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked11} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                auth2050年までに今の生活を維持して世界の人口が96億人に達すると、地球3つ分の天然資源が必要と言われています。持続可能な消費と生産とは、資源効率と省エネの促進、持続可能なインフラの整備、そして、基本的サービスと、環境に優しく働きがいのある人間らしい仕事の提供、すべての人々の生活の質的改善を意味します。持続可能な消費と生産は「より少ないものでより多く、よりよく」を目指しているため、経済活動による正味の福祉向上は、ライフサイクル全体を通じて資源の利用、劣化および汚染を減らす一方で、生活の質を高めることによって促進できます。また、生産者から最終消費者まで、あらゆる人を巻き込みながら、サプライチェーンの運用を大いに重視する必要もあります。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img13} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                気候変動及びその影響を軽減するための緊急対策を講じる
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked12} onChange={handleChange('checked12')} />}
                    label={state.checked12 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked12} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                気候変動は国境に関係のないグローバルな課題です。気象パターンは変化し、海面は上昇し、異常気象はますます激しくなり、温室効果ガスの排出量は史上最高水準に達していました。コロナ禍による経済の減速により2020年は約６％減少すると予測されていますが、この改善は一時的なものにすぎません。対策を取らなければ、世界の平均気温は 2100年までに最大で3.2℃上昇する見込みとなります。最も大きな影響を受けているのは、最貧層と最も脆弱な立場にある人々です。気候変動は、国際レベルでの調整を要する解決策と、開発途上国の低炭素経済への移行を支援するための国際協力をともに必要とする問題なのです。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img14} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                持続可能な開発のために海洋・海洋資源を保全し、持続可能な形で利用する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked13} onChange={handleChange('checked13')} />}
                    label={state.checked13 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked13} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                世界の海洋は、その温度、科学的性質、海流、生物を通じ、地球を人間が住める場所にしているグローバル・システムの原動力となっています。私たちの雨水、飲料水、気象、気候、海岸線、私たちの食物の多く、さらには私たちが吸い込む大気中の酸素でさえ、究極的にはすべて、海が提供、制御しています。しかし現時点では、汚染による沿岸水域の劣化が続いているほか、海洋の酸性化は、生態系と生物多様性の機能に悪い影響を与えています。これによって、小規模漁業にも悪影響が及んでいます。海洋保護区を実効的に管理し、しっかりと資金を供給する必要があるほか、乱獲や海洋汚染、海洋の酸性化を抑えるための規制の導入も必要となっています。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img15} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                陸域生態系の保護、回復、持続可能な利用の推進、持続可能な森林の経営、砂漠化への対処、ならびに土地の劣化の阻止・回復及び生物多様性の損失を阻止する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked14} onChange={handleChange('checked14')} />}
                    label={state.checked14 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked14} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                地球の表面の75％を変化させた人間の活動は野生生物と自然をますます隅に押し込みました。約100万種の動植物が絶滅の危機に瀕しています。そして、主に農地拡大により森林面積は依然として恐るべき速さで縮小しています。地球の表面積の 30.7%を覆う森林は、食料の安定確保と住処の提供のほか、気候変動との闘いや、生物多様性と先住民の居住地の保護にも鍵を握る役割を果たします。私たちは森林を保護することにより、天然資源の管理を強化し、土地生産性を高めることもできます。人間の活動と気候変動に起因する森林破壊と砂漠化は、持続可能な開発に大きな課題を突き付けるとともに、貧困と闘う人々の生活と生計に影響を及ぼしています。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img16} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                持続可能な開発のための平和で包摂的な社会を促進し、すべての人々に司法へのアクセスを提供し、あらゆるレベルにおいて効果的で説明責任のある包摂的な制度を構築する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked15} onChange={handleChange('checked15')} />}
                    label={state.checked15 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked15} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                持続可能な開発に向け、平和で包摂的な社会を推進するためには、国際的な殺人、子どもに対する暴力、人身取引や性的暴力の脅威に取り組むことが重要です。こうした取り組みは、すべての人に司法へのアクセスを提供し、あらゆるレベルで実効的で責任ある制度を構築するための下支えとなるからです。戦争や迫害、紛争を逃れる人々の数は2019年時点で7950万人を超え史上最多の数となりました。また、世界中で5歳未満の子供の約4人に1人の出生が公式に記録されていません。個人の権利保護に向けた第一歩となるのは、全世界で出生届を導入し、各国により独立性の高い人権機関を設けることです。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
              <img className={classes.img} alt="complex" src={img17} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom  variant='h3' >
                持続可能な開発のための実施手段を強化し、グローバル・パートナーシップを活性化する
                </Typography>
                <div className={classes.wrapper}>
                  <FormControlLabel
                    control={<Switch   checked={state.checked16} onChange={handleChange('checked16')} />}
                    label={state.checked16 ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                    />
                    <Slide direction="up" in={state.checked16} mountOnEnter unmountOnExit>
                <Typography className={classes.author} variant="body2" gutterBottom>
                持続可能な開発アジェンダを成功させるには、原則と価値観、共有のビジョン、そして人間と地球を中心に据えた共有の目標に基づいて構築された、グローバル、地域、国内、地方レベルでの包摂的なパートナーシップが必要です。多くの国は、成長と貿易を促進するために政府開発援助を必要としています。それでも援助レベルは低下しており、支援国は開発資金を増やすという役割を果たしていません。各国が新型コロナウイルス感染症のパンデミックから回復し、より良く復興（Build back better）し、持続可能な開発目標を達成する手段を確保するために、今まで以上に強力な国際協力が必要です。
                </Typography>
                </Slide>
                </div>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
















        
    </div>
  );
}