# A Reflection on Teamwork

Last weekend, while working with a team to design a highly coupled system, I struggled to delegate tasks without running into conflicts between our work.

I had never faced this problem before. Either we had never needed to work truly in parallel, or the problem had been decoupled enough for each of us to work independently. Oh, you take the frontend; I’ll take the backend!

That wasn’t the case with this project. I learnt just how important system design is, at both the high and low levels. At a high level, we assumed that splitting the backend into separate responsibilities would be enough to decouple our work. Boy, was I wrong. At the low level, implementing those responsibilities still required them to interact in some way.

Work in layers, and define the contracts between them clearly. That is what I would advise any team working on a highly coupled system.

And communicate, communicate, communicate. At even the slightest inkling that two responsibilities might depend on each other, clarify it with the team and make sure everyone is on the same page. Avoid duplicate logic and redundant work.
