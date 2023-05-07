<script setup>
</script>

<template>
  <div class="page flex">
    <section
      class="px-4 py-12 bg-slate-800 text-gray-300 h-full w-4/12 text-center"
    >
      <h2>Kacper Kotlewski</h2>
      <span>Web Software developer</span>
      <article>
        <h3>Profile</h3>
        <p>
          22 years old software developer,<br />
          10 years of passion in programming,<br />
          4 years as freelance <br />
          2 years as worker
        </p>
      </article>
      <article>
        <h3>Contact</h3>
        <p>
          <a href="mailto:kacperkotlewski.kontakt@gmail.com" class="text-em-s">
            kacperkotlewski.kontakt@gmail.com
          </a>

          <!-- phone: <a href="tel:+48123456789">+48 123 456 789</a> -->
        </p>
        <p>
          <span>
            <strong>Ruda Śląska</strong>, Katowice, Gliwice, Częstochowa
          </span>
          <span class="opacity-60">, <strong>Poland</strong> </span>
        </p>
      </article>
      <article>
        <h3>Languages</h3>
        <ul>
          <li><strong>Polish</strong> - Native</li>
          <li><strong>English</strong> - B2</li>
        </ul>
        <p>Additionally I have an very basic knowledge of:</p>
        <ul>
          <li>German - A1/A2</li>
          <li>Chinese - HSK1</li>
          <li>Italian - mostly food names😅</li>
          <li>Japanese - below N5</li>
        </ul>
      </article>
    </section>
    <section class="px-4 py-12 bg-slate-100 h-full flex-1">
      <article>
        <h3>Work experience</h3>
        <ul>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
        </ul>
        <h3>Work experience</h3>
        <ul>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
        </ul>
        <h3>Work experience</h3>
        <ul>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
          <li>
            <div class="flex flex-row justify-between">
              <h4>title</h4>
              <span>mm/yyyy - mm/yyyy</span>
            </div>
            <span>desc</span>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
<style lang="scss">
:root {
  --a4-page-size: 100vh;
}
</style>
<style scoped lang="scss">
$a4_aspect_ratio: 1.414;
$text_ratio_to_vh: 0.0133;
$text_size: calc(var(--a4-page-size) * $text_ratio_to_vh);

div.page {
  background-color: #fff;
  color: #000;
  font-size: $text_size;
  height: var(--a4-page-size);
  width: calc(var(--a4-page-size) / $a4_aspect_ratio);
}

p {
  margin: 1em 0;
}
.page > article {
  margin: 1em 0;
}

a {
  color: var(--color-highligh) !important;
  text-decoration: underline;
}
li {
  margin: 0.3em 0;
}

h2,
h3,
h4 {
  font-weight: bold;
}

h2 {
  font-size: 2em;
}

article:not(:first-child) {
  margin: 1em 0;
}

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
</style>
