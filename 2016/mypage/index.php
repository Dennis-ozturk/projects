<?php include 'header.php' ?>
<div class="content">
  <div class="content-head-info">
    <img src="img/logo.png" />
    <h3>WEBSITE / APP DEVELOPER</h3>
    <button class="btn-custom" onclick="initScroll('contact'); return false;">Let's Talk</button>
  </div>
</div>
<div id="portfolio" class="portfolio">
<h1 style="color:black">Portfolio</h1>
<h3>My Projects</h3>
<div class="row">
  <div class="my-skills">
    <h2>Skills:</h2>
    <button id="btn-1" class="btn space">HTML5</button>
    <button id="btn-2" class="btn space">CSS3</button>
    <button id="btn-3" class="btn space">JavaScript</button>
    <button id="btn-3" class="btn space">Python</button>
    <button id="btn-3" class="btn space">PHP</button>
    <button id="btn-3" class="btn space">MySQL</button>
  </div>

  <div class="about">
    <h2>About:</h2>
    <p style="font-family:'Roboto', sans-serif;line-height:1.7em;">A day without learning is a day wasted. I believe in constant growth through overcoming challenges, and coding provides that for me everyday.
I learn new technologies perpetually; giving me a diverse knowledge/understanding in programming.</p>
  </div>

</div>


<div class="row">
  <div class="project">
    <img src="projects/cpb/images/logo copy.jpg" />
    <h4 class="title">Computer Programming Buddy</h4>
    <p>This was a project in school which we made, the sites purpose was to offer programming education.</p>
    <button class="btn"><a href="projects/cpb/index.html">Demo</a></button>
  </div>
  <div class="project">
    <img src="img/web2.png" />
    <h4 class="title">Coming soon</h4>
    <p>A website I made for a customer which he could fill out the information by himself.</p>
    <button class="btn"><a href="projects/projectGabbe/index.html">Demo</a></button>
  </div>
  <div class="project">
    <img src="img/os.png" />
    <h4 class="title">Open STHLM</h4>
    <p>A mobile app which you could see all the opening-hours in Stockholm.</p>
    <button class="btn"><a href="os.html">View it</a></button>
  </div>
</div>


<div class="row">
  <div class="project">
    <img src="img/py1.png" />
    <h4 class="title">Python Script</h4>
    <p>With commands this script take content from a website, pings a website and title, all in cmd.</p>
    <button class="btn"><a href="https://github.com/Dennis-ozturk/marvin">Source</a></button>
  </div>
  <div class="project">
    <img src="img/findfriends.png" />
    <h4 class="title">findFriends</h4>
    <p>A simple social network with the basics of login in, sign up, profile and post.</p>
    <button class="btn"><a href="https://github.com/Dennis-ozturk/diary">Source</a></button>
  </div>
  <div class="project">
    <img src="img/grocery.png" />
    <h4 class="title">Grocery Store</h4>
    <p>An app that showed groceries from different stores, their prices, quantity and more </p>
    <button class="btn"><a href="grocery.html">View it</a></button>
  </div>
</div>
</div>


<div class="information">
  <h1 class="h1-text"><span class="h1-under-text">I GOT</span> 99 <span class="h1-under-text">PROBLEMS </span> <br><span class="h1-under-text">BUT</span><span class="h1-under-italic"> DESIGN </span> <span class="h1-under-text">AINT ONE</span> </h1>
</div>

<div id="contact" class="contact">
  <h1>Get in touch</h1>
  <form action="https://formspree.io/dennis.dada@hotmail.se" method="POST">
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="input-form" id="email" name="email" placeholder="Enter your email" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" class="input-form" id="subject" name="subject" placeholder="Subject" />
    </div>
    <div class="form-group">
      <label for="content">What's on your mind?</label>
      <textarea class="input-form" id="content" name="content" placeholder="Conversation" rows="5"></textarea>
    </div>
    <button type="submit" id="submit" class="submit-button btn-custom">Submit</button>
  </form>
</div>

<?php include 'footer.php' ?>
