//function to GET the backend deployed model that generates an answer based off input every time the page is loaded (when the button/link is clicked)
//conditional:
//if uonly entered one of the two - give error
//RESEARCH FUNCTION TO GET API FROM BACKEND AND RENDER TO PAGE & STORE AS JSON
//LIKE 3RD PARTY DAD JOKE API, WHEN INVOKED BY this function it should generate a response based off what was taken in the other page/function
export default function Response() {
    return (
      <div>
        <h3>Here's what I have to say...🤓</h3>
      </div>
    )
}

console.log("page is loaded!")

// Note: you do not need to import @tensorflow/tfjs here, but make sure you have installed the peer dependencies for tfjs-core and tfjs-converter.
const qna = require('@tensorflow-models/qna');

//trying to install/download everything needed for TS to get rid of errors, then convert to js, then deploy output to API for frontend?
//pip install tensorflowjs[wizard]

// Load the model.
const model = qna.load();

// Finding the answers
const answers = model.findAnswers(question, passage);

//EXAMPLE
const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
const question = "Who is the CEO of Google?"

const model1 = qna.load();
const answers1 = model.findAnswers(question, passage);
console.log(answers);
console.log(model1);
console.log(answers1);

/**
[{
  text: "Sundar Pichai",
  startIndex: 1143,
  endIndex: 1156,
  score: 0.8380282521247864
}]
**/

console.log('Answers: ');
console.log(answers);

// model = await qna.load();