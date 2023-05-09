<script setup>
const agreement_text =
  "I hereby consent to the processing of my personal data for the purposes necessary to carry out the recruitment process (in accordance with the Act of 10 May 2018 on the protection of personal data (Journal of Laws of 2018, item 1000) and in accordance with the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (GDPR)).";
</script>

<template>
  <div class="w-fit h-fit overflow-auto">
    <div class="page flex">
      <section
        class="px-0 py-6 slate-bg text-gray-300 h-full w-4/12 text-center flex flex-col justify-around items-center"
      >
        <article>
          <h2>Kacper Kotlewski</h2>
          <span>Web Software developer</span>
        </article>
        <article>
          <span>
            <strong>Silesia region</strong>,
            <strong class="opacity-60">Poland</strong>
          </span>
        </article>
        <hr />
        <!-- profile -->
        <article>
          <h3>Profile</h3>
          <p>
            22 years old software developer👨,<br />
            9 years of passion in programming💻,<br />
            3 years as freelance🐬, <br />
            2 years as worker💼, <br />
            2 years as team leader in students projects⚓
          </p>
          <p>
            6 years of HTML & CSS, <br />
            5 years of Javascript, <br />
            4 years of Python, <br />
            3 years of Django, <br />
            2 years of REST API, <br />
            1 year of Vue.js & TypeScript, <br />
            1 year of unit Testing
          </p>
        </article>
        <hr />
        <!-- contact -->
        <article>
          <h3>Connect</h3>
          <p>
            <a
              href="https://kacperkotlewski.pl/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-em-s underline text-highlight-muted"
            >
              kacperkotlewski.pl
            </a>
            <a
              href="https://github.com/KacperKotlewski"
              target="_blank"
              rel="noopener noreferrer"
              class="text-em-s underline text-highlight-muted"
            >
              github.com/KacperKotlewski
            </a>
            <a
              href="https://www.linkedin.com/in/kacper-kotlewski/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-em-s underline text-highlight-muted"
            >
              www.linkedin.com/in/kacper-kotlewski
            </a>
            <a
              href="mailto:kacperkotlewski.kontakt@gmail.com"
              class="text-em-s underline text-highlight-muted"
            >
              kacperkotlewski.kontakt@gmail.com
            </a>

            <!-- phone: <a href="tel:+48123456789">+48 123 456 789</a> -->
          </p>
        </article>
        <hr />
        <!-- languages -->
        <article>
          <h3>Languages</h3>
          <p>
            <strong>Polish</strong> - Native<br />
            <strong>English</strong> - B2
          </p>
        </article>
        <!-- Interests -->
        <article>
          <h3>Interests/Hobbies</h3>
          <p class="px-4">
            <span>Marvel/Superheros🦸</span>, <span>Movies/Series🎬</span>,
            <span>Travels✈️</span>, <span>Languages💬</span>,
            <span>Infinity growth🚩</span>, <span>Self improvement🧩</span>,
            <span>Investments💵</span>, <span>Business💡</span>,
            <span>Tools⚙️</span>, <span>AI🤖</span>, <span>Programming🧑‍💻</span>,
            <span>Web development📄</span>, <span>Web design🎆</span>,
            <span>UI/UX🖼️</span>, <span>IoT🛰️</span>.
          </p>
        </article>
      </section>
      <section class="px-4 py-6 h-full flex-1 flex flex-col justify-between">
        <div class="w-full h-fit flex-1 flex flex-col justify-between pb-12">
          <!-- 
          experience
         -->
          <article>
            <h3>Work experience</h3>
            <ul>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>Junior Software Tester</h4>
                  <span>09/2022 - now</span>
                </div>
                <span class="desc">
                  Unit testing C programs for car hardware with external tools,
                  Python scripting, working with documentation, guidelines
                  procedures, and finding defects, V-model methodology.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <a href="https://inbie.pl/">
                    <h4>INBIE - Instytut Badań i Innowacji w Edukacji</h4>
                  </a>
                  <span>04/2021 - now</span>
                </div>
                <span class="desc">
                  Working on a Erasmus+ projects with foundation. Projects
                  consider creating a web pages of particular project, helping
                  with e-learning platform, creating a mobile application,
                  making presentation, and present in front of other partners
                  all over the Europe continent.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>Fullstack Python/JS web developer</h4>
                  <span>01/2020 - now</span>
                </div>
                <span class="desc">
                  Web development using mainly Figma for designs, Docker for
                  VMs, PostgreSQL as DB, Python/Django (DRF) as a backend, and
                  Javascript/Typescript + Vue.js as a frontend, kanban.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>IT Teacher</h4>
                  <span>09/2020 - 07/2021</span>
                </div>
                <span class="desc">
                  Teaching basics of web development, and programming in JS,
                  HTML, CSS in private IT school.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>Practice as web developer</h4>
                  <span>3 month in 2019</span>
                </div>
                <span class="desc">
                  Practice at 2 different small companies as a web developer.
                  HTML, CSS, JS, PHP, MySQL, Wordpress, Moodle, Python,
                  Networking, Documentation, time management, team leading, and
                  Scrum methodologies.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>Blacer Ltd</h4>
                  <span>11/2015 - 05/2019 </span>
                </div>
                <span class="desc">
                  Co-founder of eSport organization. I was responsible for web
                  pages, eSport events organization, eSport events commentator,
                  hardware maintenance, and head of Unity Game development team.
                </span>
              </li>
            </ul>
          </article>

          <article>
            <h3>Skills</h3>
            <ul>
              <li>
                <h4>Main language and frameworks/libraries</h4>
                <span class="desc">
                  Python, Django, DRF, HTML, CSS, SASS, JS, Typescript,
                  Bootstrap, TailwindCSS. Vue.js, Vue Router, Pinia, Tessy.
                </span>
              </li>
              <li>
                <h4>Databases</h4>
                <span class="desc"> PostgreSQL, MySQL, SQLite, Oracle. </span>
              </li>
              <li>
                <h4>Tools</h4>
                <span class="desc">
                  Git, GitHub, Docker, Linux, Windows, Figma, Adobe XD, Adobe
                  Illustrator, Inkscape, GIMP, Microsoft and Google tools.
                </span>
              </li>
              <li>
                <h4>Methodologies</h4>
                <span class="desc"> Scrum, Kanban, Agile, V-model. </span>
              </li>
              <li>
                <h4>Soft</h4>
                <span class="desc">
                  Team leading, time management, communication, documentation,
                  problem solving, presentation, work under pressure, and more.
                </span>
              </li>
            </ul>
          </article>

          <article>
            <h3>Education</h3>
            <ul>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>Uniwersytet Śląski w Katowicach</h4>
                  <span>10/2020 - now</span>
                </div>
                <span class="desc">
                  Applied Computer Science. 6 semester out of 7.
                </span>
              </li>
              <li>
                <div class="flex flex-row justify-between items-end">
                  <h4>ZSP nr 6 im. M. Kopernika w Rudzie Śląskiej</h4>
                  <span>09/2016 - 06/2020</span>
                </div>
                <span class="desc">
                  IT technician. Graduated with avg of 90% score. <br />
                  Matura exam on top 83% of people from IT field (Python,
                  Access, Excel).
                </span>
              </li>
            </ul>
          </article>
        </div>
        <div id="agreement" class="text-opacity-60 h-fit">
          {{ agreement_text }}
        </div>
      </section>
    </div>
    <div class="page px-4 py-6 flex flex-col justify-between">
      <section class="flex-1 flex-col justify-center items-center relative">
        <h3 class="text-center pb-8">Projects</h3>
        <ul>
          <li
            class="flex flex-row w-full border-y-2 border-stone-400 py-8 text-em-xl items-center"
          >
            <span class="w-4/12">
              <a href="https://www.lyzewa.pl/ " class="underline text-blue-800"
                >www.lyzewa.pl</a
              >
            </span>
            <span class="desc flex-1">
              Portfolio for a photographer, stack: python, Django, HTML, SASS,
              JavaScript, jQuery, SQLite3, Bootstrap4, hosting:
              pythonanywhere.com + ovh domain. <br />
              After 3 years of hosting this page, other web developer recreate
              page, 90% of design is made by me.<br />
              development time: 2-month - 2020
            </span>
          </li>
          <li
            class="flex flex-row w-full border-b-2 border-stone-400 py-8 text-em-xl items-center"
          >
            <span class="w-4/12">
              <a
                href="https://www.inbie.pl/courses/"
                class="underline text-blue-800"
                >www.inbie.pl/courses/</a
              >
            </span>
            <span class="desc flex-1">
              Course page for INBIE about IT - support/mentoring in the process
              of creation of this page, Bootstrap5, HTML, CSS <br />
              development time: 2-days - 2022
            </span>
          </li>
          <li
            class="flex flex-row w-full border-b-2 border-stone-400 py-8 text-em-xl items-center"
          >
            <span class="w-4/12">
              <a
                href="http://enforse.inbie.pl/corner/"
                class="underline text-blue-800"
                >www.inbie.pl/corner/</a
              >
            </span>
            <span class="desc flex-1">
              Page for workshop for INBIE for “Entrepreneurial MINDSET” project.
              workshops presentation:
              <a
                href="https://www.youtube.com/watch?v=O4brah-Z6QY"
                class="underline text-blue-800"
                >www.youtube.com/watch?v=O4brah-Z6QY</a
              ><br />
              Flask, JSON as fast alternative for DB, Bootstrap5, HTML, SCSS,
              JavaScript <br />
              development time: 3-days - 2022
            </span>
          </li>
          <li
            class="flex flex-row w-full border-b-2 border-stone-400 py-8 text-em-xl items-center"
          >
            <span class="w-4/12">
              <a
                href="https://kacperkotlewski.pl/"
                class="underline text-blue-800"
                >www.kacperkotlewski.pl</a
              >
            </span>
            <span class="desc flex-1">
              My own portfolio, stack: Vue.js, JavaScript, HTML, CSS, deployed
              on Vercel(on edge). Currently in build. Planed backend: flask<br />
              development time: 1-month - 2022
            </span>
          </li>
          <li
            class="flex flex-row w-full border-b-2 border-stone-400 py-8 text-em-xl items-center"
          >
            <span class="w-4/12">
              <a
                href="https://github.com/KacperKotlewski/Cars_API"
                class="underline text-blue-800"
                >github.com/KacperKotlewski<br />/Cars_API</a
              >
            </span>
            <span class="desc flex-1">
              REST API written in DRF, the goal of API was to collect car
              ratings from users, checking in another API that car exists and if
              so add rate to the database, also it shows the average of all
              rates for each car. <br />
              Python, Django, DRF, PostgreSQL, Docker <br />
              development time: 1-week - 2021
            </span>
          </li>
        </ul>
      </section>
      <div id="agreement" class="text-opacity-60 h-fit">
        {{ agreement_text }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@media screen and (orientation: portrait) {
  :root {
    --a4-base-on-width: ;
  }
}
@mixin a4-page-default {
  --base-page-size: 0;
  --page-scale: 1;
  --page-size-scaler: calc(var(--page-scale) * var(--base-page-size));
  --page-height: 0;
  --a4_aspect_ratio: 1.414;
  --text_height_ratio: calc(9 / 750);
  --page-text-size: calc(var(--page-height) * var(--text_height_ratio));
}
@mixin a4-page-set {
  // width based
  --page-width-when-width-based: var(--a4-base-on-width) var(--page-size-scaler);
  --page-height-when-width-based: var(--a4-base-on-width)
    calc(var(--page-size-scaler) * var(--a4_aspect_ratio));
  --page-size-when-width-based: var(--a4-base-on-width) 100vw;
  // height based
  --page-width-when-height-based: calc(
    var(--page-size-scaler) / var(--a4_aspect_ratio)
  );
  --page-height-when-height-based: var(--page-size-scaler);
  --page-size-when-height-based: 100vh;
}
@mixin a4-page-choose {
  --page-width: var(
    --page-width-when-width-based,
    var(--page-width-when-height-based)
  );
  --page-height: var(
    --page-height-when-width-based,
    var(--page-height-when-height-based)
  );
  --base-page-size: var(
    --page-size-when-width-based,
    var(--page-size-when-height-based)
  );
}

:root {
  @include a4-page-default;
  @include a4-page-set;
  @include a4-page-choose;
}
</style>
<style scoped lang="scss">
.slate-bg {
  background-color: rgb(30 41 59);
}

div.page {
  background-color: #eee;
  color: #000;
  font-size: var(--page-text-size);
  height: var(--page-height);
  width: var(--page-width);
  &:not(:first-child) {
    border-top: 1px solid #000;
  }
}

p {
  margin: 1em 0;
}
.page > article {
  margin: 1em 0;
}
.page span {
  font-size: 0.8em;
  &.desc {
    line-height: 1;
  }
}
li {
  &:not(:first-child) {
    margin-top: 0.1em;
  }
}

h2,
h3,
h4 {
  font-weight: bold;
}

h2 {
  font-size: 2em;
}

// article:not(:first-child) {
//   margin: 1em 0;
// }

h3 {
  &:not(:first-child) {
    margin-top: 1em;
  }

  font-size: 1.5em;
  text-decoration: solid underline 2px;
}
h4 {
  font-size: 1.2em;
}
#agreement {
  font-size: 0.5em;
}
</style>
