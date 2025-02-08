*{
    margin: 0;
    padding: 0;
    font-family: "Parkinsans", Verdana, Geneva, Tahoma, sans-serif;
    scroll-behavior: smooth;
}

@font-face {
    font-family: 'ahsing';
    src: url('ahsing-regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

@keyframes backgroundAnimation{
    0%{
        background-position: 0%, 0%;
    }
    50%{
        background-position: 100%, 100%;
    }
    100%{
        background-position: 0%, 0%;
    }
}

@keyframes bgSwitchPandemonium{
    0%{background-image: url(PANDSHOWCASE1.png);}
    11%{background-image: url(PANDSHOWCASE2.png);}
    22%{background-image: url(PANDSHOWCASE3.png);}
    33%{background-image: url(PANDSHOWCASE4.png);}
    44%{background-image: url(PANDSHOWCASE5.png);}
    55%{background-image: url(PANDSHOWCASE6.png);}
    66%{background-image: url(PANDSHOWCASE7.png);}
    77%{background-image: url(PANDSHOWCASE8.png);}
    100%{background-image: url(PANDSHOWCASE9.png);}
}




.parkinsans {
    font-family: "Parkinsans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}


/*header*/
header{
    width: 100%;
    height: 15vh;
    background-color: black;
    text-align: center;
    position: fixed;
    z-index: 5;
}

.weblogo{
    width: 200px;
    cursor: pointer;
}

ul{
    justify-content: center;
    display: flex;
}

li a{
    transition: 0.3s;
    padding: 20px;
    text-decoration: none;
    color: white;
}

ul li{
    list-style: none;
    display: inline-bock;
    position: relative;
}

ul li::after{
    content: '';
    align-self: center;
    height: 1px;
    width: 0%;
    background-color: white;
    border-radius: 12px;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
}

ul li:hover::after{
    width: 100%;
    transition: 0.3s;
}

ul li a:hover{
    color: lightgrey;
    transition: 0.3s;
}


/*HOME*/
.home{
    padding-top: 10vh;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(HOMEBG.png);
    height: 90vh;
    background-size: 1%;
    align-content: center;
    animation: backgroundAnimation 40s infinite;
}

h1{
    text-align: center;
    font-family: 'ahsing';
    color: white;
    font-size: 100;
    text-shadow: 0 0 10px rgba(179, 236, 255, 0.3)
}
.slogan{
    text-align: center;
    color: white;
    font-weight: 500;
}

.subslogan{
    text-align: center;
    color: lightblue;
    font-weight: 1000;
}

.noscroll {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.intro {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../../assets/noise.png);
  background-size: 250px;
  pointer-events: none;
  z-index: 4;
}

.gridMotion-container {
  gap: 1rem;
  flex: none;
  position: relative;
  width: 150vw;
  height: 150vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 100%;
  transform: rotate(-15deg);
  transform-origin: center center;
  z-index: 2;
}

.row {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(7, 1fr);
  will-change: transform, filter;
}

.row__item {
  position: relative;
}

.row__item-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.row__item-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.row__item-content {
  padding: 1rem;
  text-align: center;
  z-index: 1;
}

.fullview {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.fullview .row__item-inner {
  border-radius: 0px;
}


/*ABOUTME*/
.aboutme{
    background-color: black;
    height: 540vh;
}

.abtdiv{
    width: 100%;
    height: 70vh;
    background: url(WEBbg2.png);
    background-position: center;
    background-size: contain;
}

h2{
    text-align: center;
    font-family: 'ahsing';
    font-size: 50px;
    text-shadow: 0 0 5px rgb(103, 167, 255);
    color: white;
}

.abtsect{
    background-color: midnightblue;
    margin: 20px;
    border-radius: 50px;
    padding: 50px;
    height: 40vh;
    align-content: center;
}

.abtpara{
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
}

.horizontaldiv{
    background-color: white;
    width: 65%;
    height: 0.5px;
    text-align: center;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}


.skillsdiv{
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(WEBbg.png);
    background-position: center;
    background-size: contain;
}

.skillspara{
    color: white;
    text-align: center
}

.logos{
    text-align: center;
    margin: auto;
}

.logo{
    width: 100px;
    padding: 10px;
}

.logosect{
    display: flex;
    justify-content: center;
}

.logodiv{
    background-color: white;
    border-radius: 20px;
    margin: 20px;
    text-align: center;
    transition: 0.3s;
}

.logodiv:hover{
    transition: 0.3s;
    box-shadow: 0 0 25px rgba(0,0,255,1);
}


/*MILESTONES*/
.milestonediv{
    display: flex;
    align-items: flex-start;
    position: relative;
    height: 310vh;
    width: 100%;
}

.milestonesect{
    display: flex;
    flex-direction: column;
    width: 100%;
}


.milestone-2023, .milestone-2024{
    background-size: contain;
    background-position: center;
    text-align: center;
    align-content: center;
}

.milestone-2023{
    height: 50vh;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.4)), url(milestoneBG2.png);
}

.milestone-2024{
    height: 260vh;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1)), url(milestoneBG1.png);
}

.verticaldiv{
    background-color: white;
    height: 500px;
    width: 1px;
    text-align: center;
    margin: auto;
}

.milestoneHeader{
    font-weight: 800;
    font-size: 50px;
    color: white;
}

.milestonePara{
    color: white
}

/*PROJECTS*/
.projects{
    width: 100%;
    height: 200vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(WEBbg.png);
    background-size: contain;
    background-position: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    
}

.projSectTitle{
    margin-bottom: 40px;
}

.projecttab1, .projecttab2, .projecttab3 {
    width: 100%;
    height: 50vh;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    background-size: cover;
    background-position: center;
}

.projecttab1{
    animation: bgSwitchPandemonium 90s infinite;
}

.projecttab2{
    background-color: lightgreen;
}

.projecttab3{
    background-color: darkblue;
}

.textbody {
    width: 65%;
    height: 60%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    box-sizing: border-box;
    align-content: center;
}


.projectTitle{
    color: white;
    font-size: 20;
}

.projectBody{
    color: white;
    font-size: 13;
}

.PANDBtn, .VERTBtn{
    width: 100px;
    height: 20%;
    margin: 10px;
    background-color: white;
    text-decoration: none;
    border-radius: 10px;
    border: none;
    color: black;
    transition: 0.3s;
}

.PANDBtn:hover, .VERTBtn:hover{
    width: 150px;
    cursor: pointer;
    background-color: rgba(255,255,255,0);
    border: solid 0.5px rgba(255,255,255,1);
    color: white;
    transition: 0.3s;
}


/*EXPERIENCE*/
.experience {
    width: 100%;
    height: 120vh;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(WEBbg3.png);
    background-size: contain;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
}

.expTab {
    width: 70%;
    height: 30vh;
    background-color: midnightblue;
    color: white;
    padding: 10px;
    margin: 20px;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    text-align: center;
    border: solid 0.5px white;
    border-radius: 50px;
}


.expTitle{
    font-size: 40px;
    text-shadow: 0 0 10px rgba(255,255,140,1)
}

.posTitle{
    color: white;
    text-align: center;
    font-size: 30px;
}

.posDiv{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.positionsTab{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dropDownLabel{
    width: 85%;
    background-color: rgba(0,0,0,0);
    border: solid 0.3px rgba(255,255,255,1);
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
}

.dropDownLabel:hover{
    box-shadow: 0 0 10px rgba(255,255,255,1);
    transition: 0.3s;
}

.dropTitle{
    color: white;
    text-align: left;
    padding-left: 10px;
}

.posBody{
    height: 0;
    display: none;
    overflow: hidden;
    color: #c1c1c1;
    transition: height 0.3s ease;
    padding-left: 10px;
}

.dropArrow{
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
}


/*CONTACT*/
.contact{
    width: 100%;
    height: 65vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(WEBbg4.png);
    background-size: contain;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.contactHeader{
    color: white;
}

.contactinfotab{
    width: 60%;
    height: 30vh;
    text-align: center;
    padding: 20px;
    border-radius: 50px;
}

.contactTitle{
    color: white;
    font-size: 30px;
    margin: 10px;
}

.contactDetail{
    color: #c8c8c8;
}

.gitBtn{
    width: 130px;
    height: 50px;
    border: solid 0.5px white;
    background-color: skyblue;
    border-radius: 50px;
    transition: 0.3s;
    cursor: pointer;
}

.gitBtn:hover{
    width: 160px;
    background-color: rgba(0,0,0,1);
    border: solid 0.5px skyblue;
    color: white;
    transition: 0.3s;
}

/*FOOTER*/
footer{
    background-image: url(WEBbg5.png);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(max-width: 800px){
    header{
        height: 7vh;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }
    
    .navbar{
        overflow: hidden;
        position: absolute;
        background: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.7),rgba(0,0,0,0.7),rgba(0,0,0,0.7),rgba(0,0,0,0));
        height: 200vh;
        width: 100%;
        top: -200vh;
        right: 0;
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: left;
        z-index: 5;
        transition: 1s;
    }
    
    ul{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    
    ul li{
        padding: 15px;
    }
    
    .fa{
        display: block;
        color: white;
        margin: 5px;
        padding: 20px;
        font-size: 30px;
        cursor: pointer;
    }
    
    h1{
        font-size: 60;
    }
    
    h2{
        font-size: 40;
    }
    
    .slogan, .subslogan{
        font-size: 15;
    }
    
    .abtsect{
        overflow-y: scroll;
        scroll-behavior: smooth;
        padding: 20px;
    }
    
    .abtpara{
        padding: 0;
        font-size: 15px;
    }
    
    .milestoneHeader{
        font-size: 30;
    }
    .milestonePara{
        font-size: 12;
    }
    
    .textbody{
        width: 80%;
    }
    
    .projectTitle{
        font-size: 20;
    }
    
    .projectBody{
        font-size: 11;
    }
    
    .expTitle{
        font-size: 20;
    }
    .expBody{
        font-size: 10;
    }
    
    .contact{
        height: 65vh;
    }
    
    .contactinfotab{
        padding: 0;
    }
    
    .contactTitle{
        font-size: 25;
    }
    
    .dropTitle{
        font-size: 15;
    }
    
    .posBody{
        font-size: 13;
    }
    
}

@media(max-width: 500px){
    .abtpara{
        font-size: 12px;
    }
    
    .aboutme{
        height: 650vh;
    }
    
    .logosect{
        display: flex;
        flex-direction: column;
    }
    
    .dropTitle{
        font-size: 13;
    }
    
    .posBody{
        font-size: 10;
    }
}