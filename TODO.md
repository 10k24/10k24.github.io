# TODO

Missing pages (critical gaps)

1. About page — No studio/team story, no faces, no credentials. Every design studio has this. Right now the only story is buried in an
/ideas post.

Content gaps on existing pages

3. 3 incomplete project pages — Words Have Power, Processing Native, and Clock are stubs with <!-- TODO: copy --> placeholders. If linked
from the projects page, they'd look unprofessional.
4. Tech project pages lack business context — Clock/Processing Native/Words Have Power just exist without a "so what" — no outcome, no
story, no reason a client would care.


# MVP launch

- [ ] update cover image for MJ
- [ ] update all cover images to be full res, or much higher... now they are basically 100vw
- [ ] logo animation should be vertically centered at top of page
- [ ] maybe indicate down to hint for scroll, z-index 9999
- [ ] experiment with lottiefile animation as a permanent background underneath content hmm
- [ ] 404 page - similar motion idea to homepage animation
- [ ] for ideas pages, generate og images at build time - see: https://github.com/vercel/satori#documentation
- [ ] Workflow - each new project (especially the technical ones), get 2 posts: project page and idea/blog page announcing it. That then gets pushed to socials, etc. Tight workflow, and should help with SEO
- [ ] Add feed.xml
- [ ] Studio + services page, basically show credibility
- [ ] services on home page -- DO NOT use the word “brand” for its negative historical meanings, and maybe even include a statement about why
- [ ] 3 landing pages for niches: /space, /culture, /tech, etc.
- [ ] write .github/profile/README file with similar content as above, but shorter;
   - [ ] probably need some infographic for the 3 pillars: Creativity, Computing, Collaboration

# Salgirah Festival

- [ ] Salgirah: add wristband mockup
- [ ] Salgirah - include some digital, good opportunity for showing headlines in different languages (could be social posts or large screens)

## Features

- [ ] try this motion library over GSAP: https://motion.dev/
   - [ ] try more techniques: https://www.creativecodingclub.com/courses/gsap-3-express
- [ ] components for project, metadata, etc?
- [ ] move idea generator into this repo, maybe under a tools section: https://github.com/smideas/smideas.github.io/blob/main/index.html
   - [ ] reference: https://shouldideploy.today/
   - [ ] Need a new name for it though since ideas = blog posts now
- [ ] other tools like icebreaker generator: https://github.com/facesfromplaces/facesfromplaces.github.io
- [ ] Syntax highlighting plugin: https://www.11ty.dev/docs/plugins/syntaxhighlight/

```liquid
{% highlight diff-js %}
+function myFunction() {
   // …
-  return true;
 }
{% endhighlight %}
```

## Future ideas

- [ ] Consider moving to Cloudflare Pages: https://pages.cloudflare.com/
- [ ] Explore really rich shader UI experience: https://storytelling.noomoagency.com/
- [ ] Add shop link once products are listed https://shop.10k24.com
- [ ] more custom CSS easing: https://cubic-bezier.com/
- [ ] Animated favicon, see https://github.com/stefanjudis/animated-svg-favicon/blob/master/index.html
- [ ] icons: https://github.com/feathericons/feather/tree/main

## Other inspo for a richer experience

- [ ] Smooth scrolling but less sticky (implement w/o react): https://www.lenis.dev/
- [ ] Tech agency with attitude in copy and design: https://darkroom.engineering/

===

About page notes

"Founded by Shakeel Mohamed, 10k24 combines 10 years of software engineering across developer tools, performance with graduate-level design training to create brand systems that work at scale.
