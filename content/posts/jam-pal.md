+++
title = 'Designing “JamPal” with the Design Thinking Process'
date = 2024-06-03T22:27:16-03:00
draft = true
+++

_This is a repost of a Medium article written for the [University of Waterloo](https://uwaterloo.ca) CS 449/649 course I completed in December 2023. You can read the original Medium post [here](https://medium.com/@c4oneill/jampal-team-lumens-ux-journey-2744c59a7e53)._

## Our Team

This project was completed for the [University of Waterloo](https://uwaterloo.ca) CS 449/649 course. Our group members are Belén Bonilla, Casey O’Neill, Goziem Abuah, Mashrur Chowdhury, and Mohamed Abid.

## **Introduction**

Human-AI collaboration has become more prevalent than ever before, especially with the introduction of widely accessible technologies that leverage Artificial Intelligence Generated Content (AIGC). AI-powered tools such as ChatGPT, Midjourney, and Dall-E are helping people generate all kinds of content, from social media posts to virtual paintings in the style of famous artists like Van Gogh, with just the click of a button.

In the CS 449/649 course, we were challenged to design a mobile application that leverages AIGC to solve a real-world problem. Given our passion for both listening to and creating music, we chose to solve the problem of musicians not being able to find others to play music with. Many musicians (from beginners to expert players) want to make music with others in informal, improvisational settings (colloquially referred to as “jam sessions”), but can’t or won’t find partners. We solved this problem by designing JamPal, an app that gives users access to a virtual AI-powered jam partner. For example, a musician can play the guitar while JamPal generates piano accompaniment in real time.

This blog post documents our design journey to create JamPal. We followed the design thinking process: Empathize, Define, Ideate, Prototype, and Test. We made many delightful discoveries about the UI/UX process along the way:

* User testing can be conducted with very simple prototypes (for example, paper prototypes) and these tests can yield valuable information about the usability of the design.

* The features that end up in a final product or prototype are oftentimes not the same ones that you envisioned when first ideating.

We also found striking insights about the problem of musicians not finding other people to play music with:

* Although musicians were skeptical of the AI partner’s ability to generate emotional and creative music, they were nonetheless excited to use AI to make music.

* Musicians want to play music for fun, but are also looking for personal feedback that helps them improve their skills.

In summary, we are excited to walk you through the creation of JamPal. We hope that sharing our design process will inspire others to develop creative and intuitive AIGC tools of their own using the UI/UX methods we followed in our work.

## **Background**

**Related Literature**

Before beginning the design stage of our journey, we conducted a literature review on collaborative music-making and examined the role of AI in enhancing this creative process. This review highlighted the significant benefits of collaborative music-making for physical, psychological, and social well-being[^1] [^2] [^3], thus reinforcing the pertinence of our chosen topic and proposed solution. Additionally, it  revealed a growing interest among musicians and computer scientists in AI-based music generation [^4] [^5] [^6]. However, this interest has predominantly been in areas such as assisted composition, personalized music, adaptive soundtracks, and music education [^4]. Few studies have delved into the real-time generation of musical accompaniment [^6] [^7], indicating an underexplored area and a potential avenue for our work.

Our research also revealed that users of AI music systems highly value creativity and empathy [^4] [^5] [^8]. This insight was pivotal in shaping our app’s design, targeting these expectations through its features and interfaces.

Furthermore, we conducted a technical analysis of AIGC in music, focusing on the latest state-of-the-art generative audio models [^9] [^10] [^11] [^12]. This analysis deepened our understanding of their capabilities and limitations, which was crucial in devising a realistic and viable solution for the specific problem we aimed to address.

**Existing Solutions**

We examined existing music apps and platforms to gain insight into the current landscape of our design focus. One significant example is Google’s DrumBot [^7], a web app that offers real-time drum accompaniment to melodies played by users. However, its functionality is limited to drum sounds, and it requires input through a Musical Instrument Digital Interface (MIDI) device or a virtual on-screen keyboard. Another platform we examined is Endlesss [^13], a collaborative music platform that allows for real-time jamming through a virtual space, addressing barriers like geographic distance. However, its effectiveness still relies on the availability of the musicians to engage in real-time musical jam sessions. We also explored LyricJam Sonic [^14], an AI-based system that generates lyrics in response to live music and provides musical accompaniment. Despite its innovative approach, LyricJam’s focus on electronic music and dependency on pre-recorded material limits its application for broader musical styles and spontaneous composition. Our research revealed a gap in the market: there are currently no products that allow musicians to spontaneously collaborate with an AI partner in real-time across any instrument and without genre restrictions. JamPal has been designed to fill this market gap by delivering the flexibility and spontaneity that musicians require.

## **Context Study**

To better understand our user’s needs and problems, we employed empathetic research methods with our target users. Data was systematically collected by creating personas and empathy maps alongside conducting interviews. This data was then meticulously categorized and analyzed using an affinity diagram to facilitate interpretation and inform design decisions.

**Profiling Users**

We created three distinct user personas and their corresponding empathy maps to represent our target audience, visualize their needs and challenges, and better understand their perspectives.

![One of the user personas we created.](https://cdn-images-1.medium.com/max/2544/0*N8zH-lSn_t0vbIdn)*One of the user personas we created.*

![The empathy map we created for the persona.](https://cdn-images-1.medium.com/max/2826/0*km_BkCGqgzoehiYF)*The empathy map we created for the persona.*

By creating these personas and empathy maps, we were able to anticipate the needs and challenges of our target users.

Needs:

* To play music with other people in a safe (non-judgemental) environment.

* To have a music-making partner that is always available.

* To receive valuable feedback after a jam session.

* To be able to learn from previous sessions by receiving sheet music transcriptions of each session.

Challenges:

* Difficulty finding other musicians for jam sessions, often due to social or physical isolation and busy schedules.

* Anxiety about playing in front of others for fear of judgment.

* Lack of specific feedback on their playing performance.

* Challenges in finding reliable and satisfying substitutes for live jamming with other musicians.

**Exploratory Study Process**

We then conducted an exploratory information-gathering session with three individuals from our target audience to gather information about what features musicians would want to see in JamPal. Each session included a questionnaire and a semi-structured interview.

We used the questionnaire to gather information about how often potential users had played their instrument, their practice habits, and general desires when it came to enhancing their personal music creation abilities. Our questionnaire results indicated that a majority of our sample size felt nervous about playing music collaboratively with other people for fear of judgment. In addition, despite our assumption that users who were shy to play music with other people would be more eager to play music with an AI partner, we did not find a significant correlation between how willing a participant was to play music with an AI partner and how comfortable they felt playing with other people; however, this may have been confounded by the fact that most participants were excited just by the thought of jamming with an AI partner.

We used the user interview to verify the accuracy of our personas and empathy maps. We used a combination of closed- and open-ended questions. The findings from these interviews are described in the next section.

**Exploratory Study Results**

We created an affinity diagram to synthesize the qualitative interview results and generate insights from the data, in order to determine the key points our app should address and develop into features. To create the affinity diagram, we extracted data items from the raw interview results and systematically grouped similar items. We then synthesized the results by giving each grouping a short name, and repeating the grouping and naming steps until we found the most valuable insights.

![The completed affinity diagram.](https://cdn-images-1.medium.com/max/8192/1*4GfmDOxK55xtdIy7KiNYLA.png)*The completed affinity diagram.*

As a result of the affinity diagram analysis, we discovered the following insights from the five interviews:

* Musicians need AI that is easy and intuitive to communicate with .

* Musicians do not expect AI to play with emotion.

* Musicians believe in AI’s ability to evaluate their technical skills.

* Musicians are excited to think about the freedom playing with an AI partner would offer.

These insights helped us identify the key points our app should address that are related to the user tasks: allowing users to play music with a jam partner, providing feedback on technical aspects such as timing and harmony, facilitating learning, and helping musicians improve their musical skills. These key points corroborate the user needs we initially anticipated through our user personas and empathy maps.

## **Design**

**Design Alternatives**

Based on our context study, we started exploring design options to meet our target users’ needs. We determined five possible features for our app based on the insights we gained from creating the personas, empathy maps, interviews, and affinity diagram:

1. Create and record a new jam session.

1. Receive timing feedback on a jam session.

1. View sheet music transcripts from a jam session.

1. Schedule jam sessions.

1. Share recorded jam sessions.

We then crafted storyboards (images that visualize interactions with the design) to better understand each feature. This approach not only helped us visualize the potential impact and utility of each feature but also guided us in adopting our target users’ perspective and helped us decide which features to prioritize and develop more deeply.

![*Storyboard for the feature “Receive feedback on a jam session”.*](https://cdn-images-1.medium.com/max/2042/0*Oui9bcyfGue0iXUQ)**Storyboard for the feature “Receive feedback on a jam session”.**

Next, we used the Crazy 8 technique to imagine the initial layouts for the five features. Each member was given five minutes to sketch eight different layouts for a specific feature, and we collectively chose the best one.

![Crazy 8 sheet for the “receive timing feedback on a jam session” feature.](https://cdn-images-1.medium.com/max/2242/0*6DCYj7MpWzkSlgaB)*Crazy 8 sheet for the “receive timing feedback on a jam session” feature.*

We then created wireframes (static representations of the layout of an interface) and user flows (representations of the path a user must follow through an interface to complete a task) for each selected design from the Crazy 8 sheets. These design deliverables were instrumental in ideating and designing the interface’s structure and interaction dynamics, allowing us to focus on what the interfaces would provide to the users and how they would respond to their actions rather than on graphic design.

![*Wireframes for the feature “Receive timing feedback on a jam session”.*](https://cdn-images-1.medium.com/max/3080/0*yCGjwOj4iVXAvXNI)**Wireframes for the feature “Receive timing feedback on a jam session”.**

![*User flow for the feature “Receive timing feedback on a jam session”.*](https://cdn-images-1.medium.com/max/3086/0*oFJspzk0qpr0tbX0)**User flow for the feature “Receive timing feedback on a jam session”.**

**Design Iteration**

Each alternative for storyboards, sketches, and user flows was carefully evaluated through collaborative discussion and iteration to ensure alignment with our users’ needs. In the end, considering the course project requirements, we decided to focus on our app’s two most important features: creating and recording a new jam session and receiving feedback on a jam session. “Create and record a new jam session” is the main feature of our app and allows users to set a jam session based on their music preferences and play their instruments with the app as a real-time accompaniment. The “Receive timing feedback on a jam session” feature allows users to compare the ideal timing for each note with the actual timing they played those notes in a jam session so they can identify discrepancies between them and adjust their performance in future sessions based on the app’s suggestions for improvement.

## **Implementation and Test**

**Low-Fidelity Prototype**

Before developing a high-fidelity digital prototype, our team first created paper and wireframe prototypes for our chosen features. Paper prototypes are made with paper and other craft supplies (such as markers and tape) and take much less time and effort to develop than high-fidelity prototypes, and using them allows designers to rapidly evaluate and iterate on a design. We were surprised to learn that, despite their simple appearance, conducting user testing with paper prototypes can provide valuable insights about the usability of a design. Our paper prototype implemented the “create and record a new jam session” feature. To see a demonstration of our paper prototype, including how we simulate responses to user input by manipulating the papers by hand, you can watch [this video](https://drive.google.com/file/d/18GE3CRz1MmlZheDFYTq_Em-wzInc2dbl/view?usp=share_link). To create the interactive wireframe prototype of the “receive timing feedback on a jam session” feature, we used the Balsamiq software.

**Low-Fidelity Prototype Evaluation**

To evaluate our design, we used our paper and wireframe prototypes in a simple user study. For the study, we designed a set of test tasks for participants to perform and asked participants to use the “think aloud” method (vocalizing their immediate thoughts) as they worked through the tasks. All participants knew how to play an instrument (one participant played the electric guitar, and one played the violin), and we used the Wizard-of-Oz technique to simulate the AI accompaniment. To do this, a member of the team simulated the AI accompaniment by playing a real instrument out of sight of the participants while the participants played their own instruments. Participants were limited to the choices of piano, acoustic guitar, or drum accompaniment for this low-fidelity evaluation.

From these evaluations, we discovered the following problems in our design:

* The instrument selection step in setting up a new jam session within the app was not as smooth as expected. Participant 1 showed hesitation during this particular step and suggested that the app could either automatically detect the instrument being used or offer a more seamless method for selection.

* The interface did not provide advanced configuration options for experienced users. Participant 2 mentioned feeling constrained by limited options for instruments and keys. He noted that in playing improvisational jazz, he frequently switches keys. Therefore, having options for dynamic scales/keys or selecting multiple keys would be highly beneficial.

**High-Fidelity Prototype**

With the feedback and insights we gained from the low-fidelity prototype evaluations, we proceeded to implement our high-fidelity prototypes. We started by creating a basic design system (including elements such as colors and fonts) to ensure a consistent look and feel across all the app interfaces and standardize all the UI elements and components. After creating the design system and deciding on high-level design choices (such as the logo of the app), we used the Figma software to develop a high-fidelity prototype that included the “create and record a new jam session” and “receive timing feedback on a jam session” features.

![Screenshots of the screen where users can configure a jam session.](https://cdn-images-1.medium.com/max/3016/0*9OwUcADUgRc0u1q6)*Screenshots of the screen where users can configure a jam session.*

![Screenshots of the screen where users can view a previous jam session.](https://cdn-images-1.medium.com/max/3004/0*etuno2zlGVmsXSRL)*Screenshots of the screen where users can view a previous jam session.*

![Screenshots of the screen where users can review feedback on their “timing” feedback.](https://cdn-images-1.medium.com/max/3200/0*mZMJ9ijWxXo_8ue0)*Screenshots of the screen where users can review feedback on their “timing” feedback.*

**High-Fidelity Prototype Evaluation**

After developing an interactive high-fidelity prototype of our design using the Figma software, our team couldn’t wait to get it into the hands of potential users to see what they thought of the experience we had designed. Using the high-fidelity prototype, we conducted both a cognitive walkthrough (with 1 person not in the class) and a heuristic evaluation (with 2 people in the class) to assess the usability of our design. The goal of a cognitive walkthrough is to see if the design is usable for new users and the goal of a heuristic evaluation is to evaluate the design on a set of specific guidelines (heuristics). From these evaluations, we discovered the following problems in our design:

* In the heuristic evaluation, none of the evaluators found the detailed timing feedback, showing us that we needed to make the feature more obvious by adding more clues for the user to find.

* In the cognitive walkthrough, the user was confused about what primary key and AI instrument to select, showing us that we need to add defaults or guidance to the setup process to make it more intuitive for users, especially those less familiar with music theory.

**Design Iteration**

From the valuable insights we gained through evaluating the low- and high-fidelity prototypes, we were able to iterate on the design of our application. Based on the results of our low-fidelity prototype evaluations, we decided to make the following changes:

* Change the “Select your Instrument” field on the session configuration page to use a more conventional selection input, such as a dropdown.

* Added a clickable icon to the rows on the “My Sessions” page to make it more obvious that they can be clicked.

* Change the “Timing Feedback” graphic to use a sheet music representation of the session instead of a waveform representation because the sheet music is more familiar to musicians.

* Increase the visibility of the highlighted waveform sections so that users know they can be clicked.

These changes were implemented in the development of the high-fidelity prototype. Based on the results of our high-fidelity prototype evaluations, we saw that we should make the following changes:

* Increase the visibility of the highlighted “Timing Feedback” music sheet sections so that users know they can be clicked… again!

* Implement default settings for the jam session configuration screen because not all users understood the configuration options (for example, the key of the music).

* Add a button to stop in-progress jam sessions in case the user wants to restart or needs to leave.

## Final Design

To see the final design implemented in Figma, you can watch our demo video or try it out for yourself [here](https://www.figma.com/file/jxpVmY3GGKopbMado2Mq70/High-Fidelity-Prototype?type=design&node-id=0%3A1&mode=design&t=Nhs4OXRSUd1rBYr8-1).

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/r-QGIDkmwiI" frameborder="0" allowfullscreen></iframe></center>

## **Conclusion**

As we reflect on our design journey, we see how much we have learned about the design thinking process. There is a science to designing products and going through the process ourselves has shown us how much work goes into making a design. In the future, we can use what we have learned by following the entire process, making sure to thoroughly understand the problem we are solving, and not rushing to create prototypes. We also enjoyed the process of creating a paper prototype and strongly recommend that other teams try this method.

Our work was limited by the time and budget constraints of the course and our role as students. We were also unable to implement our design in code, which prevented us from testing complex features that were difficult to simulate in Figma. In the future, we hope to expand upon our work by:

* Adding support for MIDI input.

* Adding options for a user to play with more than one AI instrument at a time.

* Adding an offline mode to alleviate privacy concerns for some users.

As AI technologies continue to improve, so too do the creative uses of AI-powered tools. We would like to see more AI-powered music applications like JamPal, and hope they can help musicians to create the music we love. Finally, we believe that sharing our design journey can help others see the value of developing AI tools with thoughtful and well-designed user experiences.

## **References**

[^1]: G. F. Welch, M. Biasutti, J. MacRitchie, G. E. McPherson, and E. Himonides, “Editorial: The Impact of Music on Human Development and Well-Being,” Frontiers in Psychology, vol. 11, 2020, doi: 10.3389/fpsyg.2020.01246.

[^2]: C. E. Schneider, E. G. Hunter, and S. H. Bardach, “Potential Cognitive Benefits From Playing Music Among Cognitively Intact Older Adults: A Scoping Review,” Journal of Applied Gerontology, vol. 38, no. 12, pp. 1763–1783, 2019, doi: 10.1177/0733464817751198.

[^3]: V. J. Williamson and M. Bonshor, “Wellbeing in Brass Bands: The Benefits and Challenges of Group Music Making,” Frontiers in Psychology, vol. 10, 2019, doi: 10.3389/fpsyg.2019.01176.

[^4]: M. Civit, J. Civit-Masot, F. Cuadrado, and M. J. Escalona, “A systematic review of artificial intelligence-based music generation: Scope, applications, and future trends,” Expert Systems with Applications, vol. 209, p. 118190, 2022, doi: [https://doi.org/10.1016/j.eswa.2022.118190](https://doi.org/10.1016/j.eswa.2022.118190)

[^5]: F. Carnovalini and A. Rodà, “Computational Creativity and Music Generation Systems: An Introduction to the State of the Art,” Frontiers in Artificial Intelligence, vol. 3, 2020, doi: 10.3389/frai.2020.00014.

[^6]: O. Vechtomova and G. Sahu, “LyricJam Sonic: A Generative System for Real-Time Composition and Musical Improvisation,” in Artificial Intelligence in Music, Sound, Art and Design, C. Johnson, N. Rodríguez-Fernández, and S. M. Rebelo, Eds., Cham: Springer Nature Switzerland, 2023, pp. 292–307. doi: [https://doi.org/10.1007/978-3-031-29956-8_19.](https://doi.org/10.1007/978-3-031-29956-8_19.)

[^7]: M. Dinculescu, “DrumBot: your real-time ML drummer,” Magenta Google AI. Accessed: Oct. 19, 2023. [Online]. Available:[ https://magenta.tensorflow.org/drumbot](https://magenta.tensorflow.org/drumbot)

[^8]: Y. Liu-Thompkins, S. Okazaki, and H. Li, “Artificial empathy in marketing interactions: Bridging the human-AI gap in affective and social customer experience,” Journal of the Academy of Marketing Science, vol. 50, no. 6, pp. 1198–1218, Nov. 2022, doi:[ 10.1007/s11747–022–00892–5](https://doi.org/10.1007/s11747-022-00892-5).

[^9]: A. van den Oord et al., “WaveNet: A Generative Model for Raw Audio,” 2016, doi: 10.48550/ARXIV.1609.03499.

[^10]: P. Dhariwal, H. Jun, C. Payne, J. W. Kim, A. Radford, and I. Sutskever, “Jukebox: A Generative Model for Music,” 2020, doi: 10.48550/ARXIV.2005.00341.

[^11]: A. Roberts, J. Engel, C. Raffel, C. Hawthorne, and D. Eck, “A Hierarchical Latent Vector Model for Learning Long-Term Structure in Music,” 2018, doi: 10.48550/ARXIV.1803.05428.

[^12]: S. Mehri et al., “SampleRNN: An Unconditional End-to-End Neural Audio Generation Model,” 2016, doi: 10.48550/ARXIV.1612.07837.

[^13]: Endelesss, “Endlesss: The place to make music together.” Accessed: Oct. 27, 2023. [Online]. Available:[https://endlesss.fm/](https://endlesss.fm/)

[^14]: O. Vechtomova, “LyricJam.” Accessed: Oct. 27, 2023. [Online]. Available:[ https://lyricjam.ai/](https://lyricjam.ai/)
