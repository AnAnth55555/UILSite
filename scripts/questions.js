/**
 * Represents the answer choices for a question.
 * Keys are answer ids (a,b,c,d), values are the labels (3, true, etc.)
 * @typedef {Object.<string, string>} Answers 
 */

/**
 * A quiz question
 * @typedef {Object} Question
 * @property {string} question - The question text for the problem
 * @property {string} [code] - Optional code snippet paired alongside the question
 * @property {Answers} answers - Answer choices keyed by id
 * @property {string} correctAnswer - The id of the correct answer
 * @property {string} [level] - Optional level of the problem (district, invitational, etc)
 * @property {string[]} tags - The tags of the question.
 * Current Tags Include: 
 * 1. Tracing - Problems that require in depth tracing of algorithms.
 * 2. Recursion - Problems that require a recursive approach (function calls itself)
 * 3. Numbers - Problems involving mathematical reasoning or general number concepts.
 * 4. Boolean - Problems involving boolean logic and algebra.
 * 5. Misc. - Problems that are ultra-specific and do not fall into any other category. 
 * ___
 * If you need a new tag, please update the jsDoc to reflect it. 
 */

const urlParams = new URLSearchParams(window.location.search);
const quizType = urlParams.get('type');

/**
 * Global question list populated based on url quiz type
 * @type {Question[]} 
 */
window.questions = [
    // 2018 State
    {
        question: "What is the output of the code segment shown on the right?",
        code: `out.print(0b10101010%0b00001111);`,
        answers: {
            a: "10",
            b: "11",
            c: "5",
            d: "6",
            e: "-11",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers", "Misc"]
    },
    {
        question: "What is the output of the code segment shown on the right?",
        code: `out.println(5%4+8-2*3);`,
        answers: {
            a: "21",
            b: "19",
            c: "10",
            d: "3",
            e: "15",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Numbers", "Misc"]
    },
    {
        question: "What is the output of the code segment shown on the right? Astericks indicate blank spaces.",
        code: `out.printf("%7.5s","85.4697294");`,
        answers: {
            a: "**85.46",
            b: "85.46973",
            c: "85.4697",
            d: "Error. Will not compile",
            e: "Error. Throws an IllegalFormatConversionException",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc", "Printf"]
    },
    {
        question: "What is the output of the code segment shown on the right? Astericks indicate blank spaces.",
        code: `
String s="feels like summer";
String t=s.substring(s.indexOf("u")).concat(s.substring(1, 4));
out.print(t);
        `,
        answers: {
            a: "mmereel",
            b: "ummereel",
            c: "mmerfeel",
            d: "eelummer",
            e: "ummerfeel",
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Misc", "String"]
    },
    {
        question: "What is the output of the code segment shown on the right? Astericks indicate blank spaces.",
        code: `
boolean a=true,b=true;
out.print((a^b)==((a||b)&&!(a&&b)));
        `,
        answers: {
            a: "true",
            b: "false",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "What is the output of the code segment shown on the right? Astericks indicate blank spaces.",
        code: `
out.print(Math.round(Math.E));
        `,
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "3",
            e: "4",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Number"]
    },
    {
        question: "Given the code segment shown on the right, which of the following additional lines of code will compile and execute correctly?",
        code: `
int w=9;
long x=8;
double y=3.5;
float z=4.15f;
        `,
        answers: {
            a: "double a=w+x+y+z;",
            b: "float b=w+x+y+z;",
            c: "long c=w+x+y+z;",
            d: "int d=w+x+y+z;",
            e: "More than one of the above.",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Number", "Types"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
int m=10,n=-8,p=2;
if(m<n&&p==n/2)
    if(m>0||p==2)
        out.print("A");
    else
        out.print("B");
else
    if(n<=-8^p*m==20)
        out.print("C");
    else
        out.print("D");
        `,
        answers: {
            a: "A",
            b: "AC",
            c: "C",
            d: "B",
            e: "More than one of the above.",
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
String s="upallnight";
int i=s.length();
do {
    out.print(s.charAt(i));
    i--;
}while(i>0);
        `,
        answers: {
            a: "thginllap",
            b: "upallnight",
            c: "thginllapu",
            d: "hginllapu",
            e: "There is no output due to an error.",
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Tracing", "String"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
boolean[] ba=new boolean[10];
for(int x=1;x<ba.length;x+=2)
    ba[x]=true;
int y=0;
for(int x=0;x<ba.length;x++)
    if(ba[x])
        y++;
out.print(y);

        `,
        answers: {
            a: "0",
            b: "10",
            c: "5",
            d: "11",
            e: "6",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "Which of the following must replace <code> to ensure that the main method will compile and that when executed the user can type in their first and last name from the keyboard?",
        code: `
import static java.lang.System.*;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Q11 {
    public static void main(String[] args) {
        <code>
        out.print("First Name: ");
        String fn=s.next();
        out.print("Last Name: ");
        String ln=s.next();
    }
}
        `,
        answers: {
            a: "Scanner s=new Scanner(System);",
            b: "Scanner s=new Scanner(in);",
            c: `Scanner s=new Scanner(new File("in");`,
            d: `Scanner s=new Scanner("System.in");`,
            e: "None of the above.",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
int s=0;
for(int x=20;x>0;x--) {
    if(x%3==0)
        s-=x;
    if(x%2!=0)
        s+=x;
    }
out.print(s);

        `,
        answers: {
            a: "-47",
            b: "47",
            c: `37`,
            d: `-37`,
            e: "-10",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
int x=-5;
x=~-++x;
out.print(x);
        `,
        answers: {
            a: "-5",
            b: "-6",
            c: `5`,
            d: `6`,
            e: "Error. Will not compile.",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Tracing", "Number", "Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
out.print(Character.SIZE);
        `,
        answers: {
            a: "8",
            b: "65536",
            c: `32`,
            d: `16`,
            e: "64",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
ArrayList<String> a=new 
ArrayList<String>();
a.add("Dalhart");
a.add("Dumas");
a.add("Muleshoe");
a.add("Earth");
a.remove(1);
out.println(a.remove("Dumas"));
        `,
        answers: {
            a: "Dumas",
            b: "-1",
            c: `true`,
            d: `false`,
            e: "There is no output due to an error.",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
ArrayList<String> a=new 
ArrayList<String>();
a.add("Dalhart");
a.add("Dumas");
a.add("Muleshoe");
a.add("Earth");
a.remove(1);
out.println(a.remove("Dumas"));
        `,
        answers: {
            a: "Dumas",
            b: "-1",
            c: `true`,
            d: `false`,
            e: "There is no output due to an error.",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "Which of the following cannot be modified using final?",
        answers: {
            a: "class",
            b: "constructor",
            c: `method`,
            d: `field`,
            e: "All of the above can be modified with final.",
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "When the code segment shown on the right has been executed which of the following statements is true about the set s?",
        code: `
Random r=new Random();
Set<Integer> s=new TreeSet<Integer>();
for(int x=1;x<=1000;x++)
    s.add((r.nextInt(10)+10)*2);
        `,
        answers: {
            a: "s contains only even numbers from 20 to 38 inclusive.",
            b: "s contains only odd numbers from 21 to 39 inclusive.",
            c: `s contains 1000 different random numbers.`,
            d: `s contains all of the numbers from 20 to 38 inclusive.`,
            e: "s contains only even numbers from 10 to 40 exclusive.",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Data Structures", "Number"]
    },
    {
        question: "Which of the following can correctly replace <code> in the code segment shown on the right?",
        code: `
Scanner s=new Scanner("2 12 6 8 1");
int sum=0;
while(s.hasNext())
    sum+=s.<code>;
out.print(sum);
        `,
        answers: {
            a: "nextInt()",
            b: "nextDouble()",
            c: `next()`,
            d: `nextFloat()`,
            e: "More than one of the above.",
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Number", "Misc"]
    },
    {
        question: "What is the output of the code segment shown?",
        code: `
String s="uil.academics@uiltexas.org";
out.print(s.matches(".+"));
out.print(s.matches("\\S{3}.\\D+@[a-z]+.\\w{3}"));
out.print(s.matches("uil\\.?\\S*@+uiltexas.org"));
        `,
        answers: {
            a: "falsefalsetrue",
            b: "falsetruetrue",
            c: `truefalsetrue`,
            d: `truetruetrue`,
            e: "falsefalsefalse",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["String", "Misc"]
    },
     {
        question: "What is the output of line #1 in the code segment shown on the right?",
        code: `
TreeMap<Integer,Integer> tm=new 
TreeMap<Integer,Integer>();
tm.put(225, 1);
tm.put(541, 2);
tm.put(102, 4);
tm.put(312, 3);
tm.put(299, 2);
out.println(tm);//line #1
int i=tm.ceilingEntry(300).getValue();
out.print(i);//line #2
        `,
        answers: {
            a: "{102=4, 225=1, 299=2, 312=3, 541=2}",
            b: "{225=1, 541=2, 299=2, 312=3, 102=4}",
            c: `{225=1, 541=2, 102=4, 312=3, 299=2}`,
            d: `{102, 225, 299, 312, 541}`,
            e: "{1, 2, 2, 3, 4}",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "What is the output of line #2 in the code segment shown on the right?",
        code: `
TreeMap<Integer,Integer> tm=new 
TreeMap<Integer,Integer>();
tm.put(225, 1);
tm.put(541, 2);
tm.put(102, 4);
tm.put(312, 3);
tm.put(299, 2);
out.println(tm);//line #1
int i=tm.ceilingEntry(300).getValue();
out.print(i);//line #2
        `,
        answers: {
            a: "2",
            b: "3",
            c: `312`,
            d: `299`,
            e: "300",
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "What is printed by the main method shown on the right?",
        code: `
public static void main(String[] args) {
    long n=4;
    out.print(f(n));
}
public static long f(long n) {
    if(n<=1)
        return 1;
    else
    return 5+f(n-1)+f(n-2);
}
        `,
        answers: {
            a: "45",
            b: "20",
            c: `43`,
            d: `13`,
            e: "25",
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Recursion"]
    },
    {
        question: "Which of the following best describes the error within the interface shown to the right?",
        code: `
public interface Shape {
 public double area();
 public double perimeter();
}
        `,
        answers: {
            a: "The signature must contain the keyword implements.",
            b: "The interface does not contain a constructor.",
            c: `The area and perimeter methods must be implemented.`,
            d: `Shape must be declared as final and contain fields that are declared as final.`,
            e: "There are no errors in the code shown. The interface Shape will compile and execute as intended.",
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Misc", "Inheritance"]
    },
    {
        question: "Which of the following statements is false?",
        answers: {
            a: "An object cannot be instantiated from an abstract class.",
            b: "It is possible to define an abstract class that does not contain any abstract methods.",
            c: `A subclass can extend multiple abstract classes.`,
            d: `A subclass can be abstract even if its superclass is concrete.`,
            e: "A class that contains abstract methods must be abstract.",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Misc", "Inheritance"]
    },
    {
        question: "What is the run time efficiency (Big O value) of the segment of code shown on the right?",
        answers: {
            a: "O(n log n)",
            b: "O(x log y)",
            c: `O(log n)`,
            d: `O(n^2)`,
            e: "O(n^x log y)",
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment shown on the right?",
        code: `
int[][][] a=
{{{3,2,1},{1,2,3},{6,5,4}},
{{4,5,6},{9,5,1},{7,5,3}},
{{8,5,2},{1,2,4},{8,4,3}}};
int sum=0;
for(int x=0;x<3;x+=2)
    for(int y=0;y<3;y+=2)
        for(int z=0;z<3;z+=2)
            sum+=a[x][y][z];
out.print(sum);

        `,
        answers: {
            a: "47",
            b: "27",
            c: `33`,
            d: `35`,
            e: "Error. Throws an ArrayIndexOutOfBoundsException.",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "When n is a power of 2, which of the following is always equivalent to m%n?",
        answers: {
            a: "m&n",
            b: "m& (n-1)",
            c: `m| (n-1)`,
            d: `m^n`,
            e: "m^ (n-1)",
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Number", "Misc"]
    },
    {
        question: "Which of the following would best replace <code 1> in the sort method implemented above to ensure that list is sorted in ascending order?",
        code: `
public static void sort(int[] list, int startIndex)
{
if ( startIndex >= list.length - 1 )
    return;
int minIndex = startIndex;
for ( <code 1> )
    if (list[index] < list[minIndex] )
        minIndex = index;
int temp = list[startIndex];
list[startIndex] = list[minIndex];
list[minIndex] = temp;
sort(<code 2>);
}
        `,
        answers: {
            a: " int index = 0; index < list.length-1; index++",
            b: "int index = startIndex - 1; index < list.length; index++",
            c: `int index = startIndex + 1; index < list.length; index++`,
            d: `int index = startIndex + 1; index < minIndex; index++`,
            e: "int index = startIndex + 1; index < list.length-1; index++",
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Tracing", "Recursion"]
    },
    {
        question: "If both values are shown using signed 8-bit 2's complement representation, what is 11101101 minus 11100100? Write your answer using signed 8-bit 2's complement notation.",
        answers: {
            a: "10001000",
            b: "11001001",
            c: `01001000`,
            d: `00001001`,
            e: "00000110",
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Number","Misc"]
    },
];
