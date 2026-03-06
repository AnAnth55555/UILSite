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
 * 6. String - Problems that involve string modification, including printf
 * 7. Data Structures - Problems that use non primitive data structures (Maps, Trees, Queues, ArrayLists, etc.)
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
        tags: ["Misc", "String"]
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
        tags: ["Numbers"]
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
        tags: ["Numbers", "Types"]
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
        tags: ["Tracing", "Numbers", "Misc"]
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
        tags: ["Data Structures", "Numbers"]
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
        tags: ["Numbers", "Misc"]
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
        tags: ["Numbers", "Misc"]
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
        tags: ["Numbers", "Misc"]
    },
    // 2019 State
    {
        question: "Which of the following values is NOT equal to 133_7",
        answers: {
            a: "73_10",
            b: "49_16",
            c: "112_8",
            d: "01001001_2",
            e: "243_5"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
out.print(-(5*-7/2+9-4));
        `,
        answers: {
            a: "12",
            b: "-12",
            c: "-22",
            d: "22",
            e: "7"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right? #'s indicate blank spaces.",
        code:
            `
int x=12;
double y=3.25;
out.printf("%-+,10.3f",x*y);
        `,
        answers: {
            a: "####39.000",
            b: "########39",
            c: "###+39.000",
            d: "39.0000000",
            e: "+39.000###"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["String"]
    },
    {
        question: "What is the output of the code segment to the right? #'s indicate blank spaces.",
        code:
            `
String s1="marchmadness";
out.print(s1.indexOf('a', 2));
        `,
        answers: {
            a: "1",
            b: "2",
            c: "5",
            d: "6",
            e: "7"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["String"]
    },
    {
        question: "What is the output of the code segment to the right? #'s indicate blank spaces.",
        code:
            `
out.println(true&&!false^true||false);
        `,
        answers: {
            a: "true",
            b: "false"
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "What is the output of the code segment to the right? #'s indicate blank spaces.",
        code:
            `
int x=14;
byte y=14;
short z=12;
out.print(x+y-z*y/3);
        `,
        answers: {
            a: "23",
            b: "74",
            c: "-20",
            d: "-28",
            e: "51"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
out.print(Math.floor(Math.PI)*Math.ceil(Math.E));
        `,
        answers: {
            a: "9.0",
            b: "6.0",
            c: "12.0",
            d: "12",
            e: "9"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
int a=5,b=-2,c=0,d=-10;
if(a-d>=b)
    if(b*a>c)
        out.print("1");
    else
        {
        out.print("2");
        if(b==d+8)
            out.print("3");
        }
else
    if(c+d>c)
        out.print("4");
else
    out.print("5");
out.print("6");
        `,
        answers: {
            a: "146",
            b: "23",
            c: "236",
            d: "56",
            e: "36"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
for(int x=5;x>0;x--)
    {
    for(int y=x;y>=1;y--)
        out.print("^");
    out.println();
    }
        `,
        answers: {
            a: `^^^^
^^^
^^
^`,
            b: `^^^^^
^^^^
^^^
^^
^`,
            c: `^
^^
^^^
^^^^`,
            d: `^
^^
^^^
^^^^
^^^^^`,
            e: `^^^^^
^^^^
^^^
^^`
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
int i[]= {2,4,8,6,9,7,1,3,5};
i[i.length-i[1]]=i[3]+i[i.length-1];
int j[]= {8,9,7,4,3,5,1,2,6};
j[i[6]]=j[i[j[4]]]+i[j[5]];
out.print(Arrays.toString(j));
        `,
        answers: {
            a: "[6, 5, 1, 4, 11, 9, 8, 2, 3]",
            b: "[8, 12, 7, 4, 3, 5, 1, 2, 6]",
            c: "[8, 7, 4, 3, 15, 5, 1, 2, 6]",
            d: "[1, 6, 3, 4, 13, 5, 1, 8, 9]",
            e: "There is not output. Throws an ArrayIndexOutOfBoundsExcetption."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "Consider the class shown on the right and make no assumptions regarding import statements. Which of the following must replace <code> to allow the class to compile and execute correctly and allow the user to enter two values from the keyboard?",
        code:
            `
import java.util.Scanner;
public class Q11 {

public static void main(String[] args) {
    Scanner keyboard=new Scanner(<code>);
    System.out.print("Enter first number: ");
    int num1=keyboard.nextInt();
    System.out.print("Enter second number: ");
    int num2=keyboard.nextInt();
    System.out.print("Sum = "+(num1+num2));
    }
}
        `,
        answers: {
            a: "System.out",
            b: "in",
            c: "Scanner.in",
            d: "Scanner.nextInt()",
            e: "System.in"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
double v=0.0;
do {
    v=v+3.75;
    v=v-0.5;
}while(v<25.5);
out.print(v);
        `,
        answers: {
            a: "25.5",
            b: "25.0",
            c: "22.75",
            d: "26.0",
            e: "25.75"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Tracing", "Numbers"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
int i=158;
i%=5^4<<3%2;
out.print(i);
        `,
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "13",
            e: "14"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
out.println(Byte.BYTES+Byte.SIZE);
        `,
        answers: {
            a: "9",
            b: "18",
            c: "17",
            d: "10",
            e: "36"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
ArrayList<String> az=new
ArrayList<String>();
az.add("m");az.add("r");az.add("p");
ArrayList<String> by=new
ArrayList<String>();
by.add("f");by.add("n");by.add("d");
by.addAll(2, az);
out.print(by);
        `,
        answers: {
            a: "[f, n, d, m, r, p]",
            b: "[m, r, f, n, d, p]",
            c: "[m, r, f, n, d]",
            d: "[f, m, r, p, n, d]",
            e: "[f, n, m, r, p, d]"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
String s="computer";
String t=s.length()<s.charAt(1)?s.substring(1, 4):s.substring(3, 7);
out.print(t);
        `,
        answers: {
            a: "o",
            b: "7",
            c: "8",
            d: "omp",
            e: "pute"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["String", "Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
List<String> list=new LinkedList<String>();
list.add("A");list.add("R");
list.add("O");list.add("B");
list.add("W");list.add("N");
ListIterator<String> li=list.listIterator(list.indexOf("B"));
out.print(li.next());
li.next();
while(li.hasPrevious()) {
    out.print(li.previous());
    }
        `,
        answers: {
            a: "OBORA",
            b: "WBORA",
            c: "BBORA",
            d: "BWBORA",
            e: "WWBORA"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "Which line in the code segment shown here will print true?",
        code:
            `
final int flags=Pattern.CASE_INSENSITIVE|Pattern.LITERAL;
Pattern p=Pattern.compile("[abc]+", flags);
out.println(p.matcher("[aBc]+").matches());//line #1
out.println(p.matcher("abc").matches());//line #2
out.println(p.matcher("aBcAbC").matches());//line #3
        `,
        answers: {
            a: "line #1",
            b: "line #2",
            c: "line #3",
            d: "All of the above.",
            e: "None of the above."
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["String", "Misc"]
    },
    {
        question: "Given the code segment shown on the right, which of the following lines will NOT compile?",
        code:
            `
ArrayList<Integer> arraylist=new
ArrayList<Integer>();
Stack<Integer> stack=new Stack<Integer>();
Queue<Integer> priorityqueue=new
PriorityQueue<Integer>();
int[] array=new int[10];
        `,
        answers: {
            a: "Collections.sort(arraylist);",
            b: "Collections.sort(stack);",
            c: "Collections.sort(priorityqueue);",
            d: "Collections.sort(array);",
            e: "More than one of the above."
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Data Structures", "Misc"]
    },
    {
        question: "SpecialIterator is ________________________.",
        answers: {
            a: "an inner class",
            b: "an anonymous class",
            c: "a local class",
            d: "an interface",
            e: "a nested static class"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code:
            `
out.print("U"+5*2+"V"+4+9);
        `,
        answers: {
            a: "U52V49",
            b: "U10V13",
            c: "U10V49",
            d: "UV1013",
            e: "There is no output due to an error."
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Misc", "Tracing"]
    },
    {
        question: "Which of the following will always print a random lowercase letter?",
        answers: {
            a: "out.print((char)(r.nextInt(26)+97));",
            b: "out.print((char)(r.nextInt(97)+26));",
            c: "out.print((char)(r.nextInt(26)));",
            d: "out.print((char)(r.nextInt(26)+65));",
            e: "out.print((char)(r.nextInt(27)+97));"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc", "String", "Numbers"]
    },
    {
        question: "If x is a power of 2 then the method shown on the right returns the equivalent of _____.",
        code: `
public static int mtd(int x) {
    if(x>1)return mtd(x/2)+1;
    return 0;
}
        `,
        answers: {
            a: "2^x",
            b: "log_2(x)",
            c: "log_10(x)",
            d: "x^2",
            e: "0"
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Numbers", "Recursion"]
    },
    {
        question: "Which of the following lies closest to zero on a number line? All of the values are shown using signed 8-bit binary two's complement notation.",
        answers: {
            a: "10100011",
            b: "10001010",
            c: "11011101",
            d: "11001101",
            e: "11010110"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "Which of the following is equivalent to the Boolean expression shown on the right?",
        code: `
!(A ∗ (A + B) + (B + B ∗ A)
        `,
        answers: {
            a: "A̅+B̅",
            b: "!(A*B)",
            c: "A+B",
            d: "!(A^B)",
            e: "!A * !B"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Boolean"]
    },
    // State 2021
    {
        question: "What is the product of 10112 and 11002?",
        answers: {
            a: "17_16",
            b: "AC_16",
            c: "132_16",
            d: "84_16",
            e: "A4_16"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the statement shown on the right?",
        code: `
out.print(8 + 5 - -4 / 2 * 3);
        `,
        answers: {
            a: "19",
            b: "20",
            c: "24",
            d: "13",
            e: "-20"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the line of code shown on the right? Asterisks indicate spaces.",
        code: `
out.printf("%10.0s%10s","hello","goodbye");
        `,
        answers: {
            a: "hello*****goodbye***",
            b: "*****hello***goodbye",
            c: "*************goodbye",
            d: "hellogoodbye***",
            e: "There is no output due to an error."
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["String"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
String str = "AustinSanAntonioZoo";
out.print(str.replace('a', 'Z'));
        `,
        answers: {
            a: "ZustinSZnZntonioZoo",
            b: "ZustinSanAntonioZoo",
            c: "ZustinSanZntonioZoo",
            d: "AustinSanAntonioaoo",
            e: "AustinSZnAntonioZoo"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["String"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
boolean a = true, b = false;
boolean c = true, d = false;
boolean e = !(a && d) || !(c ^ b);
out.print(e);
        `,
        answers: {
            a: "true",
            b: "false"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
out.print(Math.floor(-Math.cbrt(-9)));
        `,
        answers: {
            a: "-2.0",
            b: "2.0",
            c: "-3.0",
            d: "3.0",
            e: "There is no output due to an error."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
int m = 35, n = 18;
double x = 19, y = 9.25;
double r = m + x / n * y;
r = (int)(r + 0.5);
out.print(r);
        `,
        answers: {
            a: "44.5",
            b: "44",
            c: "45.5",
            d: "45.0",
            e: "44.0"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
int x = 2147483647;
int y = 0;
while(x > 0) {
    switch(x % 10) {
        case 1:
        case 2:
        case 3: y++;break;
        case 4:
        case 5:
        case 6: y+=3;break;
        case 7: y*=2;break;
        default: y/=2;
    }
    x/=10;
}
out.print(y);
        `,
        answers: {
            a: "19",
            b: "4",
            c: "17",
            d: "18",
            e: "26"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers", "Tracing", "Misc"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
int x = 2147483647;
int y = 0;
while(x > 0) {
    switch(x % 10) {
        case 1:
        case 2:
        case 3: y++;break;
        case 4:
        case 5:
        case 6: y+=3;break;
        case 7: y*=2;break;
        default: y/=2;
    }
    x/=10;
}
out.print(y);
        `,
        answers: {
            a: "19",
            b: "4",
            c: "17",
            d: "18",
            e: "26"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Numbers", "Tracing", "Misc"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
String s = "computersciences";
char[] c = s.toCharArray();
int a = c.length / 2;
for(int i = 0; i < a; i++) {
    char b = c[i];
    c[i] = c[i + a];
    c[i + a] = b;
}
for(char d:c)
    out.print(d);
        `,
        answers: {
            a: "secneicsretupmoc",
            b: "sciencescomputer",
            c: "csocmipeuntceers",
            d: "retupmocsecneics",
            e: "There is no output due to an error."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing", "Misc"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
double x = 5.0, y = 0.0;
for(;x < 6.0;)
{
    y += 0.5;
    x += 0.2;
}
out.print(y);
        `,
        answers: {
            a: "2.5",
            b: "2.0",
            c: "3.0",
            d: "6.0",
            e: "There is no output due to an error."
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "Which of the following throws declarations is required for the main method to ensure that the class shown on the right will compile and execute as intended? Assume that all necessary import statements are present.",
        code: `
public class Q11
{
public static void main(String[] args)
    {
    File file = new File("data.dat");
    try {
        Scanner scr = new Scanner(file);
        while(scr.hasNext())
            out.print(scr.next());
        scr.close();
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    }
    }
}
        `,
        answers: {
            a: "throws FileNotFoundException",
            b: "throws Throwable",
            c: "throws IOException",
            d: "throws Exception",
            e: "This class does not require a throws declaration."
        },
        correctAnswer: 'A',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "What is the output of the code segment to the right? Asterisks indicate spaces.",
        code: `
out.print(18 / 3 & 4 + 5 << 1);
        `,
        answers: {
            a: "6",
            b: "8",
            c: "3",
            d: "2",
            e: "No output. Throws an ArithmeticException."
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "Which of the following statements is true about the code segment shown on the right?",
        code: `
byte a = 15;
byte b = 10;
byte c = (byte)(a * b);
out.print(c);
        `,
        answers: {
            a: "The coded segment will compile and execute and will print zero.",
            b: "The code segment will compile and execute but will print a non-zero value that is not the product of a and b.",
            c: "The code segment will compile and execute and will print the product of a and b.",
            d: "The code segment will compile, execute and print the product of a and b only if the cast to byte is removed.",
            e: "The code segment will not compile and execute as shown."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Numbers", "Tracing"]
    },
    {
        question: "What is the output of the code segment to the right?",
        code: `
ArrayList<String> list = new
ArrayList<String>();
list.add("blue");list.add("green");
list.add("red");list.add("orange");
list.add("purple");list.add("yellow");
int x = 1;
while(list.contains("orange"))
{
    list.remove(x);
    x++;
}
out.print(list);
        `,
        answers: {
            a: "[orange, purple, yellow]",
            b: "[purple, yellow]",
            c: "[blue, red, purple, yellow]",
            d: "[red, purple, yellow]",
            e: "[blue, purple, yellow]"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "Which of the following must replace <code> in the method sum shown on the right?",
        code: `
public static void main(String[] args) {
    out.println(sum(5,2,4,7,3));
}
public static int sum(<code>) {
    int t = 0;
    for(int x:nums)
        t+=x;
    return t;
}
        `,
        answers: {
            a: "int...nums",
            b: "int[] nums",
            c: "int nums",
            d: "int:nums",
            e: "int nums{}"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "Shown on the right is an array in its original state and in its sorted state after a radix sort has been applied to the array. The algorithm uses base 10 and starts with the least significant digit. The state of the array after each pass of the algorithm is not shown. Which of the following represents the state of the array after the pass marked by question marks and the //comment",
        code: `
[7, 2111, 158, 3, 215, 1, 20, 45, 1254]
[ , , , , , , , , ]
[ ?, ?, ?, ?, ?, ?, ?, ?, ?]//comment
[ , , , , , , , , ]
[1, 3, 7, 20, 45, 158, 215, 1254, 2111]
        `,
        answers: {
            a: "7, 158, 3, 215, 1, 20, 45, 1254, 2111",
            b: "1, 3, 7, 2111, 158, 215, 20, 45, 1254",
            c: "1, 3, 158, 2111, 215, 7, 20, 45, 1254",
            d: "1, 1254, 158, 215, 2111, 20, 3, 7, 45,",
            e: "1, 3, 7, 2111, 215, 20, 45, 1254, 158"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "Which of the following statements is NOT true about a protected data member of a class?",
        answers: {
            a: "It may be accessed from within the class.",
            b: "It may be accessed from within the package that contains the class.",
            c: "It may be accessed from a subclass of the class in a different package.",
            d: "It may be accessed from a different class within a different package.",
            e: "None of the above. All of the statements are true about protected data members."
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Misc"]
    },
    {
        question: "Which of the following Boolean expressions will produce the truth table shown on the right?",
        code: `
A B C
T T T F
T T F T
T F T F
T F F F
F T T T
F T F F
F F T T
F F F T
        `,
        answers: {
            a: "A && !(B && !C)",
            b: "A ^ !(B && !C)",
            c: "A ^ (!B || C)",
            d: "!(A || B && C)",
            e: "More than one of the above"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "Which of the following best describes what the method shown above will return?",
        code: `
public static double method(double x) {
    double m = x / 2;
    double n = 0.0;
    while(true) {
        n = (m + x / m) / 2.0;
        if((int)(m * 1000 + 0.5) / 1000.0 == (int)(n * 1000 + 0.5) / 1000.0)
            break;
        m = n;
    }
    return (int)(n * 100 + 0.5) / 100.0;
}
        `,
        answers: {
            a: "log_10(x) rounded to four decimal places.",
            b: "√x rounded to two decimal places.",
            c: "log_2(x) rounded to two decimal places.",
            d: "x^2 rounded to four decimal places.",
            e: "The average of the values between 0.0 and x rounded to two decimal places."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment shown on the right?",
        code: `
int r = 0;
for(int x = 1; x <= 30; x += 2) {
    if(x % 3 == 0)
        continue;
    r += x;
}
out.print(r);
        `,
        answers: {
            a: "225",
            b: "150",
            c: "300",
            d: "1",
            e: "90"
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the code segment shown on the right?",
        code: `
int count = 0;
int x = 1;
do {
    int y = 1;
    while(y <= 7) {
        for(int z = 1; z <= 4; z++)
        count++;
        y++;
    }
    x++;
}while(x <= 10);
out.print(count);
        `,
        answers: {
            a: "70",
            b: "280",
            c: "440",
            d: "350",
            e: "4"
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "Which of the following must replace <code> in the code segment shown on the right?",
        code: `
Map<Character,Integer> m = new TreeMap<>();
String s = "acclimatization";
for(int i = 0; i < s.length(); i++)
m.put(s.charAt(i), i);
Set<Character> z = <code>;
for(char i:z)
out.print(m.get(i) + " ");
        `,
        answers: {
            a: "m.keySet()",
            b: "m.values()",
            c: "m.entrySet()",
            d: "m.size()",
            e: "m.hashCode()"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "Once <code> has been filled in correctly, what is the output of the code segment shown on the right?",
        code: `
Map<Character,Integer> m = new TreeMap<>();
String s = "acclimatization";
for(int i = 0; i < s.length(); i++)
m.put(s.charAt(i), i);
Set<Character> z = <code>;
for(char i:z)
out.print(m.get(i) + " ");
        `,
        answers: {
            a: "a c l i m t z o n",
            b: "a c i l m n o t z",
            c: "10 2 12 3 5 14 13 11 9",
            d: "a a a c c i i i l m n o t t z",
            e: "0 1 4 3 5 14 13 7 9"
        },
        correctAnswer: 'c',
        level: 'State',
        tags: ["Data Structures"]
    },
    {
        question: "What is the output of the main method shown?",
        code: `
public static void main(String[] args) {
    int[] i = {0,1,2,3,4};
    out.println(Arrays.toString(method(i)));
    out.println(Arrays.toString(i));
}

public static int[] method(int[] j) {
    int[] k = {1,3,5,7,9};
    Arrays.fill(j, 1, 2, 5);
    int[] m = j;
    j = k;
    k = m;
    return k;
}
        `,
        answers: {
            a: "[1, 3, 5, 7, 9]\n[5, 5, 2, 3, 4]",
            b: "[1, 3, 5, 7, 9]\n[0, 1, 2, 3, 4]",
            c: "[0, 5, 2, 3, 4]\n[0, 1, 2, 3, 4]",
            d: "[0, 5, 2, 3, 4]\n[0, 5, 2, 3, 4]",
            e: "[1, 2, 5, 3, 4]\n[1, 2, 5, 3, 4]"
        },
        correctAnswer: 'd',
        level: 'State',
        tags: ["Data Structures", "Tracing"]
    },
    {
        question: "Which of the following represents the output of the code segment shown on the right?",
        code: `
char[] c = {'c','o','m','p','u','t','e','r'};
"science".getChars(3, 6, c, 2);
for(char ch:c)
out.print(ch);
        `,
        answers: {
            a: "coencter",
            b: "scputce",
            c: "coenceer",
            d: "sciputerence",
            e: "coencmputer"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["String"]
    },
    {
        question: "What is the output of the code segment shown on the right?",
        code: `
double x = 6.0,y = 8.0;
double z = Math.hypot(x, y);
out.print(z);
        `,
        answers: {
            a: "100.0",
            b: "10.0",
            c: "5.0",
            d: "12.0",
            e: "2.0"
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Numbers"]
    },
    {
        question: "Which of the following represents the simplest form of the Boolean expression shown on the right?",
        code: `
AA ∗ BB + AA ∗ (BB + CC) + BB ∗ (BB + CC)
        `,
        answers: {
            a: "BB ∗ AA + CC",
            b: "AA + BB + CC",
            c: "AA + BB ∗ AA + CC",
            d: "AA ∗ BB + AA ∗ CC",
            e: "BB + AA ∗ CC"
        },
        correctAnswer: 'e',
        level: 'State',
        tags: ["Boolean"]
    },
    {
        question: "What is the output of the main method shown to the right?",
        code: `
public static void main(String[] args) {
    out.print(method1("193"));
}

public static int method1(String s) {
    int x = 0;
    for(int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        x = x * 16 + method2(c);
    }
    return x;
}

public static int method2(char c) {
    if(c >= 65 && c <= 70)
        return 10 + c - 65;
    else
        return c - 48;
}
        `,
        answers: {
            a: "402",
            b: "403",
            c: "202",
            d: "Correct Answer not shown.",
            e: "Error. The code will not compile."
        },
        correctAnswer: 'b',
        level: 'State',
        tags: ["Tracing"]
    },
    {
        question: "What is the output of the main method shown to the right?",
        code: `
public static void main(String[] args)
{
    out.print(method(416,23));
}

public static int method(int i, int j)
{
    if(i < j)
        return 0;
    else
        return 1 + method(i - j, j);
}
        `,
        answers: {
            a: "18",
            b: "20",
            c: "12",
            d: "Correct Answer not shown.",
            e: "Error. Results in a StackOverFlowError"
        },
        correctAnswer: 'a',
        level: 'State',
        tags: ["Recursion", "Tracing"]
    },
];
