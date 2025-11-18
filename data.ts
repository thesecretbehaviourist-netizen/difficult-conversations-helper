import { Scenario, ScriptCategory, Template, Tool } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 's1',
    title: 'Angry parent in reception',
    isFree: true,
    grounding: 'Breathe. You are the professional. Your calm is the anchor. Pace the conversation, don’t match theirs.',
    openers: [
      'I can see this is really important, and I want to hear it. Let’s find a quiet space to talk.',
      'Thank you for coming in. It sounds like you’re really frustrated. Let’s talk it through properly.',
      'This sounds stressful. Let’s work out what’s happened and what we need to do next.',
    ],
    boundaries: [
      'I am here to help, but I need us to speak calmly. I won’t be able to continue if voices are raised.',
      'We will get to a solution, but shouting isn’t the way. Let’s take a breath here.',
      'I can see you’re angry, and that’s okay. It’s not okay to direct it at me. Let’s focus on the issue.',
    ],
    swaps: [
      { of: '“Calm down.”', instead: '“I can hear how much this matters. Let’s slow it down and I’ll listen.”' },
      { of: '“It’s not that serious.”', instead: '“For you, this is clearly a big deal. Help me understand your perspective.”' },
      { of: '“You need to leave.”', instead: '“This conversation isn’t productive right now. We need to pause. Let’s agree a time to speak later today.”' },
    ],
    explanation: 'High anger is a threat-response (fight/flight). Their pre-frontal cortex (thinking brain) is offline. Logic won’t work yet. Your primary job is to co-regulate and bring their thinking brain back online. This is done through calm, validation, and clear boundaries.',
    deEscalationSteps: [
      'Validate the emotion, not the behaviour: “I can see you’re angry.”',
      'Move to a private space if possible.',
      'Use a low, slow tone of voice. Don’t rush your words.',
      'Listen without interrupting for at least 60 seconds.',
      'Summarise what you’ve heard: “So, from your side, what happened was…”',
    ],
    escalationPaths: {
      anger: { title: 'If they get more angry', script: '“This conversation is over for now. Shouting is not acceptable in our school. We can rearrange for when we can speak respectfully. I’m asking you to leave now.” If they refuse, follow school policy for trespassers.' },
      tears: { title: 'If they start to cry', script: '“Let’s just pause for a moment. I can see this is really upsetting. Take your time.” Offer a tissue and a glass of water. Wait.' },
      shutdown: { title: 'If they shut down', script: '“It seems like this is a lot to take in. Shall we take a five-minute break, or would you prefer to carry on?”' },
      demandHead: { title: 'If they demand the Head', script: '“The Headteacher isn’t available right now, but I am here to help you. I will listen to everything and make sure it gets to them. Let’s start with what’s happened.”' },
    },
    nextSteps: ['Document the conversation immediately using a factual, neutral tone.', 'Inform SLT/DSL of the incident.', 'Agree on a time for a follow-up call, even if it’s just to check in.'],
    whenToPause: ['“I’m not able to give this my full attention with raised voices. Let’s pause and I’ll call you in 20 minutes.”', '“We are going around in circles. Let’s both take some space and agree to speak at 9am tomorrow with a clear head.”'],
  },
  {
    id: 's2',
    title: 'Parent saying school is targeting their child',
    isFree: true,
    grounding: 'Stay curious, not defensive. This feels like an attack, but it’s really about their fear. You don’t need all the answers right now.',
    openers: [
      'That sounds really concerning. Help me understand what makes you feel that way.',
      'It’s really important to me that every child feels safe and supported here. Talk me through what’s been happening.',
      'That’s a serious concern, and I want to take it seriously. Let’s look at this together.',
    ],
    boundaries: [
      'I can hear your worry, but we need to avoid generalisations. Let’s focus on specific examples so I can look into it properly.',
      'My job is to support your child. To do that, I need to understand the facts of what happened. Let’s stick to that.',
      'I can’t discuss other children, but I can talk in detail about what we’re doing for your child.',
    ],
    swaps: [
      { of: '“We don’t do that here.”', instead: '“It would be very concerning if any child was being targeted. Let’s look at the specific incidents you’re worried about.”' },
      { of: '“That’s not true.”', instead: '“My experience of the situation is different. Can you tell me more about what you saw/heard?”' },
      { of: '“It’s because of their behaviour.”', instead: '“Let’s separate the behaviour from the child. All behaviour is communication. What is the behaviour telling us right now?”' },
    ],
    explanation: 'Accusations of "targeting" often stem from a parent’s feeling of helplessness or a history of their child being misunderstood. They are advocating, perhaps clumsily. Your role is to shift from accusation to collaboration. Use "we" and "let\'s" to signal partnership.',
    deEscalationSteps: [
      'Don’t take it personally. Breathe.',
      'Ask clarifying questions: “Can you give me an example of when that happened?”',
      'Use phrases like: “Help me understand…”',
      'Show you’re taking it seriously by writing things down.',
      'Agree on one specific, immediate action you will take.',
    ],
    escalationPaths: {
      anger: { title: 'If they get more angry', script: '“I hear your frustration, but accusing staff isn’t helping us solve this. We need to work together. If we can’t do that calmly, we’ll need to stop and try again another time.”' },
      tears: { title: 'If they start to cry', script: '“It’s clear how worried you are for them. It’s okay. Let’s focus on one thing we can do right now to make things a little better.”' },
      shutdown: { title: 'If they shut down', script: '“It seems I’m not explaining this well. Let me try again. What’s the one thing you most want me to know?”' },
      demandHead: { title: 'If they demand the Head', script: '“I understand you want to speak to the Headteacher. The best way to get this resolved is to give them all the information clearly. That’s what I’m trying to do now, so I can pass it on accurately.”' },
    },
    nextSteps: ['Review the child’s behaviour/incident log for any patterns.', 'Speak to all staff involved to get a balanced picture.', 'Arrange a follow-up meeting with a clear agenda: Share findings, agree on strategies, set a review date.'],
    whenToPause: ['“You’ve given me a lot of important information. I need to go and look into this properly. Let’s agree that I will call you back at [time] tomorrow.”', '“I don’t want to give you an answer on the spot. This deserves proper consideration. Let me investigate and come back to you.”'],
  },
  // Add more scenarios here... for now, let's create a few paid ones.
  {
    id: 's3',
    title: 'Parent upset about a consequence',
    isFree: true,
    grounding: 'This is about fairness, not punishment. Stay on the behaviour, not the child. Be a calm, consistent pillar of your school policy.',
    openers: [
        'I understand you’re not happy about the consequence. Let’s talk through what happened.',
        'Thanks for raising this. It’s important that consequences feel fair, so let’s review the incident.',
        'I hear that you feel the consequence was too harsh. Can you tell me your understanding of events?'
    ],
    boundaries: [
        'The consequence is in line with our behaviour policy, which is applied consistently for all students.',
        'We can discuss the behaviour that led to this, but the consequence itself is not up for debate.',
        'My focus is on helping your child learn from this. Let’s talk about how we can work together on that.'
    ],
    swaps: [
        { of: '“That’s just the rule.”', instead: '“Our policy on this is clear, and it’s there to help everyone learn and be safe. The behaviour was X, and the consequence is Y.”' },
        { of: '“All the other kids got the same.”', instead: '“The consequence was applied consistently for the behaviour we saw.”' },
        { of: '“It’s done now.”', instead: '“The consequence has been given, yes. Now, let’s talk about the next steps to get things back on track.”' }
    ],
    explanation: 'Parents often challenge consequences because they feel their child is being unfairly judged or because it triggers their own anxieties about their child’s success. By calmly sticking to the behaviour (the choice the child made) and the policy (the system), you depersonalise the conflict.',
    deEscalationSteps: [
        'State the behaviour factually and without emotion.',
        'Reference the school behaviour policy.',
        'Reassure them this is about learning, not punishment.',
        'Shift the conversation to future strategies.',
        'End by reinforcing your partnership: “We both want what’s best for them.”'
    ],
    escalationPaths: {
        anger: { title: 'If they escalate', script: '“I’ve explained the school’s position. I’m not going to argue about it. If you wish to make a formal complaint, you can find the procedure on the school website.”' },
        tears: { title: 'If they get emotional', script: '“I know it’s hard when your child is in trouble. This isn’t a reflection on them as a person. It’s about one choice they made, and we’re helping them make better ones next time.”' },
        shutdown: { title: 'If they shut down', script: '“Is there anything else you’d like to ask about this? My goal is for us to move forward from this together.”' },
        demandHead: { title: 'If they demand the Head', script: '“The Headteacher will tell you the same thing, as this is our consistent school policy. I am the right person to discuss the next steps with you.”' }
    },
    nextSteps: [
        'Document the conversation.',
        'Ensure the consequence is carried out as planned.',
        'Have a restorative conversation with the child after the consequence.'
    ],
    whenToPause: [
        '“We aren’t agreeing on this, and that’s okay. The school’s position is firm. I’d suggest we end this conversation now and I will email you a summary.”',
        '“I’ve explained the reasoning. I don’t have anything more to add. We need to draw a line under this now and support your child to move on.”'
    ]
  },
  {
    id: 's4',
    title: 'Parent minimising or denying behaviour',
    isFree: true,
    grounding: 'Facts are your friend. Stick to what was seen, what was said. Don’t get drawn into a debate about character. It’s about the behaviour, not the child.',
    openers: [
        'I hear that your view of what happened is very different. Let’s go through the report I have here.',
        'It can be difficult to hear this about our children. Let’s look at the facts together.',
        'Let’s set aside whether it was intentional for a moment and just talk about the impact of the behaviour.'
    ],
    boundaries: [
        'I’m not here to debate your child’s character; I’m here to discuss a specific behaviour and its impact.',
        'This isn’t about blame. It’s about taking responsibility and learning.',
        'What you’re describing is not what was witnessed by staff. We have to act on what we see.'
    ],
    swaps: [
        { of: '“He did do it.”', instead: '“The report from two staff members states that they saw…”' },
        { of: '“He’s lying.”', instead: '“His account of events doesn’t match with the evidence we have.”' },
        { of: '“You’re making him out to be a monster.”', instead: '“Not at all. We’re talking about one specific choice he made. He’s a good kid who made a poor choice.”' }
    ],
    explanation: 'Denial is a protective mechanism. The parent may feel that their child’s behaviour is a reflection of their parenting. Stick to objective, observable facts to lower the emotional stakes. Focus on the *impact* of the behaviour on others, which is harder to deny.',
    deEscalationSteps: [
        'State the facts calmly.',
        'Use "I" statements based on reports: "I have a report that says..."',
        'Redirect from intention to impact.',
        'Ask questions: “How can we help him make a better choice next time?”',
        'Find a small point of agreement to build on.'
    ],
    escalationPaths: {
        anger: { title: 'If they get angry', script: '“I’m not going to argue. The school’s position is based on the evidence we have. If you’re unhappy with that, you need to follow the formal complaints procedure.”' },
        tears: { title: 'If they get upset', script: '“I know this is hard to hear. We see his potential, which is why we’re tackling this head-on. We need to do it together.”' },
        shutdown: { title: 'If they refuse to engage', script: '“I can see you don’t agree with our version of events. However, we have a responsibility to act. The consequence will stand, and we will support him to repair the harm caused.”' },
        demandHead: { title: 'If they demand the Head', script: '“The Headteacher is aware and supports this process. The information they have is the same as mine.”' }
    },
    nextSteps: [
        'Document everything, including the parent’s denial.',
        'Proceed with the planned consequence and restorative actions.',
        'Keep communication with home factual and brief.'
    ],
    whenToPause: [
        '“We are at an impasse. I have presented the school’s view, and you have presented yours. We will have to agree to disagree and the school will proceed based on the information it has.”',
        '“This conversation isn’t moving forward. Let’s pause it. I will email you a summary of what was discussed.”'
    ]
  }
];

export const SCRIPT_LIBRARY: ScriptCategory[] = [
  {
    title: 'Boundary-Setters',
    scripts: [
      { id: 'b1', text: 'I am here to help, but I won’t continue if voices are raised.', isFree: true },
      { id: 'b2', text: 'We need to work together. If we can’t do that calmly, we’ll need to stop and try again another time.', isFree: true },
      { id: 'b3', text: 'I can’t discuss other children, but I can talk in detail about what we’re doing for your child.', isFree: true },
      { id: 'b4', text: 'The consequence is in line with our behaviour policy and isn’t up for debate. Let’s talk about how to move forward.', isFree: true },
      { id: 'b5', text: 'I have explained the school’s position. I’m not going to argue about it.', isFree: true },
    ],
  },
  {
    title: 'Trauma-Informed Responses',
    scripts: [
      { id: 't1', text: 'I can hear this has really stressed you — let’s talk it through.', isFree: true },
      { id: 't2', text: 'It sounds like you’re in a really tough spot. I’m here to listen.', isFree: true },
      { id: 't3', text: 'That’s a lot to hold. Let’s just focus on one thing at a time.', isFree: true },
      { id: 't4', text: 'Behaviour is communication. What do you think your child is trying to tell us right now?', isFree: true },
      { id: 't5', text: 'Let’s separate the child from the behaviour. We’re dealing with a good kid who has made a poor choice.', isFree: true },
    ],
  },
  {
    title: 'If They\'re Dysregulated...',
    scripts: [
        { id: 'd1', text: '“I can see you’re upset. Let’s just breathe for a moment.”', isFree: true },
        { id: 'd2', text: '“Let’s slow this conversation right down.”', isFree: true },
        { id: 'd3', text: '“I’m going to listen now. Just tell me everything.”', isFree: true },
        { id: 'd4', text: '“It sounds like this has been building up for a while.”', isFree: true }
    ]
  },
  {
    title: 'How to End the Call Safely',
    scripts: [
        { id: 'e1', text: '“Thank you for this conversation. The clear next step is for me to [action]. I will call you back on [day] at [time].”', isFree: true },
        { id: 'e2', text: '“We’ve agreed on the next step. I’m going to end the call now so I can get started on that.”', isFree: true },
        { id: 'e3', text: '“This conversation is no longer productive. I am going to end the call now. We can speak again when we are both calmer.”', isFree: true },
        { id: 'e4', text: '“I have all the information I need for now. Thank you. I will be in touch.”', isFree: true }
    ]
  }
];

export const TEMPLATES: Template[] = [
  {
    id: 'temp1',
    title: 'Follow-up Email',
    isFree: true,
    content: `Dear [Parent Name],

Thank you for speaking with me today. 

To summarise our conversation, we discussed [briefly summarise key points, e.g., the incident in the playground, your concerns about their reading].

As agreed, the next steps are:
- School will: [Action point 1]
- Home will: [Action point 2]

I will be in touch again on [Date] to review how things are going. 

Thank you for working with us to support [Child's Name].

Best wishes,

[Your Name]`
  },
  {
    id: 'temp2',
    title: 'Reintegration Meeting Form',
    isFree: true,
    content: `**Reintegration Meeting**

**Student:** [Student Name]
**Date:** [Date]
**Attendees:** [List of attendees]

**1. Purpose of meeting:**
To welcome [Student Name] back after [suspension/internal exclusion/etc.] and ensure a positive next step.

**2. Acknowledging what happened:**
We discussed the behaviour on [Date of incident] which was [brief, factual description of behaviour]. 
We acknowledge the impact this had on [e.g., other students, staff].

**3. Student's perspective:**
[Student Name] shared that they were feeling [e.g., angry, frustrated, overwhelmed] because [reason].

**4. Agreed strategies for next time:**
When [Student Name] feels this way again, they will:
- [Strategy 1, e.g., use their exit card]
- [Strategy 2, e.g., speak to named adult]

**5. School support:**
School will support this by:
- [Support 1, e.g., check-in with named adult at 9am]
- [Support 2, e.g., movement breaks]

**6. Agreed by all:**
We agree to this plan and will work together for a fresh start.

**Signatures:**
...
`
  },
];

export const RED_FLAGS_CONTENT = [
    {
        title: 'When it becomes safeguarding',
        content: 'A conversation shifts from a behaviour/school issue to safeguarding when a parent discloses something that makes you concerned about a child’s safety or wellbeing. This could be about harm happening at home, neglect, or emotional abuse. Your job is not to investigate, but to report.'
    },
    {
        title: 'What to do in the moment',
        content: `1. **Listen:** Don't interrupt. Let them talk.
2. **Don't promise confidentiality:** You can say "I have to share this information with the people who can help, but I will only tell the people who absolutely need to know."
3. **Use clarifying questions:** "Can you tell me a little more about that?"
4. **Reassure:** "Thank you for telling me this. That must have been very difficult."
5. **Tell them the next step:** "I need to go and speak to our Designated Safeguarding Lead now. They are the expert who can help."`
    },
    {
        title: 'Disclosure Do\'s and Don\'ts',
        content: `**DO:**
- Stay calm.
- Listen carefully.
- Reassure them they did the right thing by telling you.
- Report it to your DSL immediately. Write everything down.

**DON'T:**
- Panic.
- Promise to keep it a secret.
- Ask leading questions ("Did he hit you?").
- Investigate it yourself.
- Delay in reporting it.`
    }
];

export const TOOLS: Record<string, Tool> = {
    'regulate': {
        id: 'regulate',
        title: 'Regulate Me: 10s Grounding',
        content: [
            'Plant your feet firmly on the floor.',
            'Push your heels down. Notice the feeling of the ground beneath you.',
            'Breathe in for 4 seconds.',
            'Hold for 2 seconds.',
            'Breathe out for 6 seconds.',
            'You are the anchor in this conversation.'
        ]
    },
    'sequencer': {
        id: 'sequencer',
        title: 'Conversation Sequencer',
        content: [
            '**1. Validate:** "I can hear how upsetting this is." Start with their feeling.',
            '**2. Clarify:** "Help me understand exactly what happened." Get the facts.',
            '**3. Summarise:** "So, what you’re saying is..." Show you’ve listened.',
            '**4. Next Steps:** "Here is what we will do next." Agree a clear, simple action.'
        ]
    },
    'checker': {
        id: 'checker',
        title: 'Emotional State Checker',
        content: [
            'Is my heart rate steady?',
            'Am I breathing slowly?',
            'Is my voice calm and low?',
            'Am I listening more than I’m talking?',
            'Do I feel defensive?',
            'If you answer "no" to the first four, or "yes" to the last one, pause. Take a breath. You are not ready to respond yet.'
        ]
    },
    'spotter': {
        id: 'spotter',
        title: 'Escalation Spotter',
        content: [
            '**Fight:** Raised voice, pointing, clenched fists, aggressive language, standing up/moving closer.',
            '**Flight:** Avoiding eye contact, trying to change subject, physically turning away, saying "I can\'t do this".',
            '**Freeze:** Going silent, blank expression, giving one-word answers, looking "through" you.',
            'Recognise the state. You can’t reason with someone in fight/flight/freeze. Your only job is to de-escalate.'
        ]
    }
}