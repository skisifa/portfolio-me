import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
    <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="./css/index.css"/>
        <link rel="icon" type="image/x-icon" href="./img/pirate-skull.ico"/>
        <title>SKISIFA</title>
    </Head>
      <body>
    <header id="header">
        <nav id="navbar">
          <span id="terminal">C:\User\SKISIFA></span>
          <span id="blink">█</span>
          <span id="space"></span>
      
          <a href="#welcome-section" target="_blank" id="item1" class="nav-link">Studio</a>
          <a href="https://discord.com/users/SKISIFA#6666" target="_blank" id="item2" class="nav-link">Discord</a>
          <a href="https://github.com/skisifa1" target="_blank" id="item3" class="nav-link">Github</a>
        </nav>
            <div class="men">
        <input type="checkbox" id="menu-toggle"/>
          <label id="trigger" for="menu-toggle"></label>
          <label id="burger" for="menu-toggle"></label>
          <ul id="menu">
              <li><a href="#">STUDIO</a></li>
              <li><a href="https://github.com/skisifa1" target="_blank">GITHUB</a></li>
              <li><a href="https://discord.com/users/SKISIFA#6666" target="_blank">DISCORD</a></li>
          </ul>
  </div>
      </header>
      
      
    <form>
        <section id="welcome-section">
          <img src="./img/1598168464_1593435806_samurai jack0.gif" alt="Avatar"/>
          <div class="dog">
            <h2 id="typer"></h2>
          </div>
          <h1 style="margin-left:40px">Issam<span style="color:#000000;font-weight: bold;">\|/</span>Lahlou</h1>
          <h2 style="font-weight: bold;">MY SKILLS</h2>
        <div class="card">
            <div class="first">
                <h3 style="color: #00ff04;">Full-Stack Developer</h3>
                <h3 style="color: #00ff04; ">Logical Approach To Work</h3>
            </div>
            <div class="second">
                <h3 style="color: #00ff04; ">Hacker</h3>
                <h3 style="color: #00ff04; ">excellent debugging</h3>
            </div>
        </div>
        <h2 style="font-weight: bold;">ABOUT ME</h2>
        <p>Hi, i'm Issam Lahlou, a passionate self-taught JS Progammer. my passion for System lies with dreaming up ideas and making them come true with elegant interfaces. i take great care in the experience, excellent problem-solving skills, and code quality of the things I build.</p>

        </section>
        <div class="divider">
          <hr class="dotted"/>
          <h2>Famous Hacker <br/> In The Future</h2>
          <hr class="dotted"/>
        </div>
    </form>
      
      <div class="bot">
        <h4>Powered by <span>CuldaStudio</span><span style="color:white;margin-left:-5px;font-size:15px">.</span></h4>
      </div>
    </body>
    <script src="./js/anime.js"></script>
    </>
  );
}
