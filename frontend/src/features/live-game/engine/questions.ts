import type {Question} from "../types";
// DEMO DATA. Replaced by backend quiz content in a later phase.
export const QUESTIONS: Question[] = [
 {
  "id": 0,
  "q": "What is the output of 10/4 in Java when both are int?",
  "cat": "Basics",
  "diff": "Easy",
  "o": [
   "2.5",
   "2",
   "3",
   "Error"
  ],
  "a": 1,
  "e": "Integer division drops the decimal part, so 10/4 = 2."
 },
 {
  "id": 1,
  "q": "Which keyword prevents a class from being inherited?",
  "cat": "OOP",
  "diff": "Easy",
  "o": [
   "static",
   "abstract",
   "final",
   "private"
  ],
  "a": 2,
  "e": "A final class cannot be extended."
 },
 {
  "id": 2,
  "q": "Which collection does NOT allow duplicate elements?",
  "cat": "Collections",
  "diff": "Medium",
  "o": [
   "ArrayList",
   "LinkedList",
   "HashSet",
   "Vector"
  ],
  "a": 2,
  "e": "Set implementations like HashSet store unique elements only."
 },
 {
  "id": 3,
  "q": "What does the == operator compare for two String objects?",
  "cat": "Strings",
  "diff": "Medium",
  "o": [
   "Content",
   "References",
   "Length",
   "Hashcode"
  ],
  "a": 1,
  "e": "== compares references. Use equals() to compare content."
 },
 {
  "id": 4,
  "q": "Which exception is checked?",
  "cat": "Exceptions",
  "diff": "Medium",
  "o": [
   "NullPointerException",
   "IOException",
   "ArithmeticException",
   "ClassCastException"
  ],
  "a": 1,
  "e": "IOException must be handled or declared; the others are runtime exceptions."
 },
 {
  "id": 5,
  "q": "What is the default value of an int instance variable?",
  "cat": "Basics",
  "diff": "Easy",
  "o": [
   "null",
   "undefined",
   "0",
   "-1"
  ],
  "a": 2,
  "e": "Instance int fields default to 0."
 },
 {
  "id": 6,
  "q": "Which Spring annotation marks a REST controller?",
  "cat": "Spring Boot",
  "diff": "Medium",
  "o": [
   "@Service",
   "@RestController",
   "@Entity",
   "@Bean"
  ],
  "a": 1,
  "e": "@RestController = @Controller + @ResponseBody."
 },
 {
  "id": 7,
  "q": "What does i++ vs ++i differ in?",
  "cat": "Operators",
  "diff": "Hard",
  "o": [
   "Nothing",
   "Value returned in expression",
   "Speed only",
   "Type"
  ],
  "a": 1,
  "e": "i++ returns the old value; ++i returns the new value."
 }
];
