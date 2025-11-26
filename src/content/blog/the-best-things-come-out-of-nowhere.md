---
title: "the best things come out of nowhere"
subtitle: "and I think you should always grab new challenges"
description: "A retrospective on architecting a high-performance WhatsApp microservice using FastAPI, Pydantic, and modern Python."
pubDate: 11/26/2025
location: Santa Cruz do Sul, Brazil
---

I spent the last month focused on what was one of the biggest challenges — and turned out to be one of the best experiences — of my career so far.

Those who know me know that when I started diving deep into programming around 2019, a huge part of my time was invested in building utility chatbots, tools, and mini-games to play with friends on Discord servers.

Now, more than half a decade later, I got to work on an incredible WhatsApp integration using the new Coexistence API, which took me right back to those first steps of my journey.

This time, the scope was much larger, with far more responsibility, demands, and expectations surrounding the work. Sure, a large part of the automated response service was already ready; in a way, I just needed to connect the dots. And that is exactly it — creating an interface that can be easily plugged into an already structured system is the greatest pleasure a developer can have.

I had the help of a great colleague on the frontend implementation, allowing me to focus 100% of my efforts on the backend. I was responsible for architecting the project’s infrastructure as a microservice external to the main project, creating an isolation layer and allowing the use of more advanced technologies compared to the main project’s legacy Django framework.

I’ll talk about this in detail in a future post, but ever since the first time I coded in a strongly typed language (our dear Java 11), working in a dynamically typed environment (like pure Python and JavaScript) became extremely stressful. Luckily, my main stack in recent years has involved mostly TypeScript, with a bit of Python here and there for backend tweaks, but this opportunity let me try out the market’s current cutting-edge tech.

It was the first project where I put FastAPI combined with Pydantic into practice, and in less than three weeks, I was able to iterate on the code several times, improving the application's quality, performance, and maintainability.

Despite my role in developing the infrastructure, the support of the best team I’ve ever worked with was essential. I could always count on the advice of a developer with many more years of experience than me, the sharp practical skills of my frontend _padawan_ implementing the necessary screens in the main system, and the support of my dear friend and Tech Lead, who organized this project and backed me up on organization and infra testing.

Finally, I want to thank our dear friend, Product Owner, and startup co-founder for the opportunity and the trust in our work. This is the first of many releases for a project that is going to turn the foodservice buying experience upside down.
