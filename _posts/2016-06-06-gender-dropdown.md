---
layout: post
title:  "Do You Really Need That Gender Dropdown?"
date:   2015-06-06
categories: ['tech', 'design']
tags: UX LGBTQIA+
excerpt: No, your users aren't all going to be male or female, and you shouldn't be treating them like they are.
image:
   feature: professor-oak-boy-or-girl
---

Whatever you're building for the web, you're going to be fighting to attract users and keep them engaged. As such, you should always keep in mind how you can make your work as inclusive and accessible as possible. Conversations about accessibility in the tech world tend to be dominated by questions over how we can better cater for users with physical access needs (e.g. those using screenreaders or colourblind users). While this is incredibly important, there are other aspects of accessibility you should be thinking about too.

Here's one:

Traditional methods of data collection can potentially alienate a wide variety of users if used without thought. One group that are particularly excluded by conventional surveys are those who identify [outside the gender binary](http://nonbinary.org/wiki/Nonbinary_gender). This encompasses a wide range of identities from genderfluid (a gender identity that changes with time, circumstances and/or situations) to agender (where an individual identifies as having no gender, and/or feels like they have no gender), all of which lie between and beyond the traditional binary distinction between 'man' and woman'. By requiring users to answer a limited gender dropdown form, particularly one in which the only available options are 'male' and 'female', you're going to be alienating some people. And given how often users are required to input data when signing up to a service, this means that's potentially one of the first impressions a user will have of your product - when UX is prioritised so highly elsewhere, continuing to use such a system is just daft.

Next time you're building a user information form and you go to add a gender dropdown, ask yourself a couple of questions:

#### Do you actually need to know your users' gender?
Often, gender dropdown forms seem to be included just 'because'. Why do you need to know my gender to sign me up for this design newsletter? Is it because the form template you're working off includes the question and you can't be bothered to remove it? Is it because it might make for a slide on a presentation at some point down the line? I can't think of a reason that's worth alienating potential users for. In every other area, developers strive to reduce bloat as much as possible, especially when it comes to user interactions. If you can't think of why you would need to know your users' gender in under a minute, remove the question. Even in cases where you think you need gender data, other options may serve your needs better.

#### What are you really asking?
When asking users for personal data, it's good practice to ask yourself what you actually need that data for. In many cases, a little thought will demonstrate you don't need to know users' gender at all. Do you want to know which honorific should be used in contact with a user? Use an honorific dropdown menu.\*

If you want to provide gendered content (say, an email newsletter for a fashion e-commerce site with separate men's and women's department), let users explicitly opt-in to which content they want to receive instead. This can even result in higher overall engagement, as users will be receiving content they know they'll be interested in.

Removing the need to input gender can improve the experience of general users, remove the risk of alienating non-binary users and provide more useful data. Rather than including the question by default, think carefully about whether it's really required. In some cases, however, it is going to be.

\* While we're on the subject of accessibility for varied gender identities, I would recommend you include the gender neutral honorific 'Mx' in any honorific options.

### Yes, I really need that gender dropdown

Maybe the client is insisting they need it. Maybe you really do need that data on your users' gender. Sometimes including a gender dropdown may be unavoidable. Luckily, there are a few simple changes you can make with minimal effort to improve accessibility:

#### Make it optional
If you absolutely have to include a gender dropdown form in your survey, wherever possible, make it optional. Most people will still answer the question, but not making it mandatory let's those who don't feel represented in a binary gender dropdown form opt out. However, this is far from a perfect solution, and is best implemented alongside making other answers available to users.

#### Remember: male and female aren't genders
When you ask a user whether they're male or female, what you're really asking them is what their sex is.

A person's sex is a broad medical categorisation generally dependant on biological factors such as chromosomes or sex organs. As situations where you would need to know a user's chromosomes are rare indeed, for the most part, what you actually want to know is what their gender identity is i.e. how they feel about their gender. Therefore (while hardly perfect terms themselves), using 'man' and 'woman' instead is a good start towards better inclusivity, as these do refer to gender identities. This also has the neat side-effect of actually being in alphabetical order. Seriously, how does anyone justify 'male' always coming before 'female' in dropdowns? <em>It doesn't make any logical sense.</em>

Also, while we're here: cis and trans aren't genders either. I've seen a few well-intentioned developers try to include these options in their dropdowns, but unless you have a pressing reason why you need to know whether your users identify as trans or not, it's unnecessary. If you do include them, for the love of all that is holy, let users select 'cis' or 'trans' <strong>in addition</strong> to other aspects of their gender identity.

#### Include more options
In an ideal world, users would be given a text field and allowed to submit their own gender, but this is rarely a realistic option as it would require a human to go through every answer to get any usable data. Instead, it's good practice to add further options for users beyond binary 'man' / 'woman'. 'Other' may seem like an obvious choice, but it's a poor one, as it lumps together a massive range of gender identities and literally 'others' them. On the opposite end of the scale, trying to include every possible gender identity as an option will simply result in a confusing and unwieldily list that will inevitably still include omissions.* Your best option here really depends on what the data's going to be used for: allowing a user to choose 'Neither' or 'I'd rather not say' can be good compromises for a client expecting binary data, for example. Alternatively, 'Non-binary' or 'Gender Variant' are sometimes used as umbrella terms for those outside the gender binary. Even using a checkbox rather than radio buttons (thus allowing a user to choose more than one option) will increase inclusivity.

\* One notable exception to this that I can think of off the top of my head are the annual Autostraddle Reader Surveys, which gives users a large list of gender identity options followed by a text field to provide more information or an alternate identity. However, these are user demographic surveys for a site specifically catering to a large audience of LGBTQ+ users, and it's unlikely this will be a practical option for you.

In 2015, there's just no reason to use a radio button male / female dropdown beyond laziness. None of the alternatives I've suggested here are perfect, but they're a great step towards making your sites more accessible. Of course, you shouldn't just be thinking about how to best serve your non-binary users, but all users - because if you're only designing a good user experience for some, it's not a good user experience at all.
