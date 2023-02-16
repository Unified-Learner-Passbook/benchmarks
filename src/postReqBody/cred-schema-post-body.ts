export default {
    addTemplateBody: {
        "schema": "did:example:evfeb1f712ebc6f1a276e12ec21",
        "template": "<html lang='en'><head><meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script><link rel='stylesheet' href='style.css' /><title>Certificate</title></head><body><div class='outer-border'><div class='inner-dotted-border'><img class='logo' src='https://www.vid.no/site/assets/files/17244/christ-deemed-to-be-university-vid.png' alt='' /><br /><span class='certification'>CERTIFICATE OF COMPLETION</span>{{grade}}<br /><br /><span class='certify'><i>is hereby awarded to</i></span><br /><br /><span class='name'><b>Daniel Vitorrie</b></span><br /><br /><span class='certify'><i>for successfully completing the</i></span><br /><br /><span class='fs-30 diploma'>diploma in Java Developer</span><br /><br /><span class='fs-20 thank'>Thank you for demonstrating the type of character and integrity that inspire others</span><br /><div class='footer'><div class='date'><span class='certify'><i>Awarded: </i></span><br /><span class='fs-20'> xxxxxx</span></div><div class='qr'>, {{programme}}, {{certifyingInstitute}}, {{evaluatingInstitute}}]/></div><span class='sign'>Dean, Christ Univeristy</span></div></div></div></body><style>*{margin:1px;padding:0;box-sizing:border-box}.outer-border{width:80vw;padding:10px;text-align:center;border:10px solid #252F50;font-family:'Lato', sans-serif;margin:auto}.inner-dotted-border{padding:10px;text-align:center;border:2px solid #252F50}.logo{width:75px}.certification{font-size:50px;font-weight:bold;color:#252F50;font-family:\"Times New Roman\", Times, serif}.certify{font-size:20px;color:#252F50}.diploma{color:#252F50;font-family:\"Lucida Handwriting\", \"Comic Sans\", cursive}.name{font-size:30px;color:#252F50;border-bottom:1px solid;font-family:\"Lucida Handwriting\", \"Comic Sans\", cursive}.thank{color:#252F50}.fs-30{font-size:30px}.fs-20{font-size:20px}.footer{display:flex;justify-content:space-between;margin:0 4rem}.date{display:flex;align-self:flex-end}.date>.fs-20{font-family:\"Lucida Handwriting\", \"Comic Sans\", cursive}.qr{margin-top:1.25rem;display:flex;justify-content:end;margin-left:0.75rem;margin-right:0.75rem}.sign{border-top:1px solid;align-self:flex-end}</style></html>",
        "type": "Handlebar"
    
    },
    addSchemaBody: {
    "schema":{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1",
    "https://playground.chapi.io/examples/alumni/alumni-v1.json",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "type": "https://w3c-ccg.github.io/vc-json-schemas/",
  "version": "1.0",
  "id": "did:example:",
  "name": "Proof of Academic Evaluation Credential",
  "author": "did:ulp:0bc51dad-885c-44a8-8e95-e3d160060bd2",
  "authored": "2022-12-19T09:22:23.064Z",
  "schema": {
    "$id": "Proof-of-Academic-Evaluation-Credential-1.0",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "description": "The holder has secured the <PERCENTAGE/GRADE> in <PROGRAMME> from <ABC_Institute>.",
    "type": "object",
    "properties": {
      "grade": {
        "type": "string",
        "description": "Grade (%age, GPA, etc.) secured by the holder."
      },
      "programme": {
        "type": "string",
        "description": "Name of the programme pursed by the holder."
      },
      "certifyingInstitute": {
        "type": "string",
        "description": "Name of the instute which certified the said grade in the said skill"
      },
      "evaluatingInstitute": {
        "type": "string",
        "description": "Name of the institute which ran the programme and evaluated the holder."
      }
    },
    "required": [
      "grade",
      "programme",
      "certifyingInstitute",
      "evaluatingInstitute"
    ],
    "additionalProperties": false
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2022-12-19T09:22:23Z",
    "verificationMethod": "did:key:z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN#z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN",
    "proofPurpose": "assertionMethod",
    "proofValue": "z5iBktnPCr3hPqN7FViY948ds5yMhrL1qujMmVD1GmzsbtXw5RUCdu4GKrQZw8U9c4G78SUNmPLTS87tz6kGAHgXB"
  }
}

,
    "tags":["academic","marks", "evaluation", "education"]

}}