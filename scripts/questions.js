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
 * @property {string} [level] - Optional level of the problem (district, invitational, etc)
 * @property {string} correctAnswer - The id of the correct answer
 */

const urlParams = new URLSearchParams(window.location.search);
const quizType = urlParams.get('type');

/**
 * Global question list populated based on url quiz type
 * @type {Question[]} 
 */
window.questions = []; 

// The question set for the tracing problems
if (quizType === "Tracing") {
    window.questions = [
        // 2018 District
        {
            question: 'What is the output of the code segment to the right?',
            code: `
        boolean yes=false,no=true,maybe=true;
        if(yes)
            out.print("no ");
        else if(no)
            out.print("yes ");
        else if(maybe)
            out.print("yes and no ");
        else
            out.print("maybe");

        `,
            answers: {
                a: 'yes',
                b: 'no',
                c: 'yes and no',
                d: 'yes yes and no'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="planet";
String t="moon";
String u=s.substring(1, 2)+t.substring(1);
out.print(u);
`,
            answers: {
                a: 'laoon',
                b: 'ploon',
                c: 'lmoon',
                d: 'plmoon',
                e: 'loon'
            },
            level: 'District',
            correctAnswer: 'e'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
char c='A';
int i=8;
double d=4.65;
out.print(c+i-d);
`,
            answers: {
                a: '68.0',
                b: 'D',
                c: '68',
                d: '68.35'
            },
            level: 'District',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
double d=0;
int i=10;
do {
    d+=--i;
}while(i>0);
out.print(d+" "+i)
`,
            answers: {
                a: '44.0 1',
                b: '55.0 1',
                c: '45.0 1',
                d: '55.0 0',
                e: '45.0 0'
            },
            level: 'District',
            correctAnswer: 'e'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
public static String rec(String s,int i) {
    if(s.length()==1)
        return s;
    else
        return s+rec(s.substring(0,i),i-1);
}
//client code
String s="Pecos";
out.print(rec(s,s.length()-1))
`,
            answers: {
                a: 'PecosPecoPecPe',
                b: 'PPePecPecoPecos',
                c: 'PecosPecoPecPeP',
                d: 'PePcePocePsoceP',
                e: 'PPPPP'
            },
            level: 'District',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int[][] mat= new int[4][4];
for(int x=0;x<4;x++)
    for(int y=0;y<4;y++)
        mat[y][x]=x+2*y;
out.println(Arrays.toString(mat[2]));
`,
            answers: {
                a: '[4, 5, 6, 7]',
                b: '[2, 3, 4, 5]',
                c: '[2, 4, 6, 8]',
                d: '[1, 3, 5, 7]',
                e: '[6, 7, 8, 9]'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
Double d1=new Double(18.99);
Double d2=19.00;
if(d1.compareTo(d2)==0)
    out.print("Go");
else if(d1.compareTo(d2)>0)
    out.print("Fight");
else
    out.print("Win");
`,
            answers: {
                a: 'Go',
                b: 'Fight',
                c: 'Win',
                d: 'Error. Will not compile.',
                e: 'Error. Throws a run time exception'
            },
            level: 'District',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="March2018",t="";
for(int i=0;i<s.length();i++) {
    switch(s.substring(i, i+1)) {
    case "M":t+="#";break;
    case "c":t+="*";
    case "0":t+="%";break;
    case "r":
    case "1":
    case "8":t+="&";break;
    default:t+="@";
    }
}
out.print(t);
`,
            answers: {
                a: '#@&*%@@%&&',
                b: '#@&*@@%&&',
                c: '#@@*%@@%@&',
                d: '#@@*@@%@&',
                e: '#&*%%&&'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="JAVA",t="java";
if(s.equals(t))
    out.print("penny ");
else if(s.equals("java"))
    out.print("nickel ");
else if(t.equalsIgnoreCase(s))
    out.print("dime ");
else if(t.equals("java"))
    out.print("quarter");
`,
            answers: {
                a: 'penny',
                b: 'nickel',
                c: 'penny nickel dime quarter',
                d: 'dime',
                e: 'dime quarter'
            },
            level: 'Invitational',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int m=10,n=1,p=1;
while(m>0) {
    p=p+n*m;
    n++;
    m-=2;
}
out.print(p);
`,
            answers: {
                a: '71',
                b: '61',
                c: '57',
                d: '70',
                e: '45'
            },
            level: 'Invitational',
            correctAnswer: 'a'
        },
        {
            question: "Which of the following best describes the method shown on the right?",
            code: `
public static int method(int[][] m) {
    int a=0;
    for(int x=0;x<m.length;x++) {
        int r=0;
        for(int y=0;y<m[x].length;y++)
            if(m[x][y]>r)
                r=m[x][y];
        a+=r;
    }
    return a;
}
`,
            answers: {
                a: 'Returns the sum of the values in the diagonal rows in array m',
                b: 'Returns the largest value in array m.',
                c: 'Returns the sum of all of the values in array m.',
                d: 'Returns the sum of the largest value in each of the rows in array m.',
                e: 'Returns the smallest value in array m.'
            },
            level: 'Invitational',
            correctAnswer: 'd'
        }
    ]
}

// The question set for the recursion problems

if (quizType === "Recursion") {
    window.questions = [
        {
            question: 'What is returned by the method call accumulate(4)?',
            code:
                public static int accumulate(int n) {
                    if (n == 0)
                        return 5;
                    else
                        return n + accumulate(n - 1);
                }
                ,
            answers: {
                a: '10',
                b: '15',
                c: '20',
                d: '14',
                e: '9',
            },
            level: 'Invitational',
            correctAnswer: 'b'
        },
        {
            question: 'What is output by the call process("UIL")?',
            code:
                public static void process(String s) {
                    if (s.length() <= 1) {
                        System.out.print(s);
                    } else {
                        process(s.substring(1));
                        System.out.print(s.charAt(0));
                    }
                ,
            answers: {
                a: 'UIL',
                b: 'LIU',
                c: 'UII',
                d: 'LLU',
                e: 'ULL',
            },
            level: 'Invitational',
            correctAnswer: 'b'
        },
    ]
}

// The question set for the bases / numbers problems. 

if (quizType === "Bases And Numbers") {
    window.questions = [
        {
            question: 'num question goes here:',
            answers: {
                a: 'yes!!!',
                b: 'no.',
                c: 'maybe?'
            },
            correctAnswer: 'c'
        }
    ]
}

// The question set for the bases / numbers problems. 
if (quizType === "Data Structures") {
    window.questions = [
        {
            question: 'data question goes here:',
            answers: {
                a: 'yes!!!',
                b: 'no.',
                c: 'maybe?'
            },
            correctAnswer: 'c'
        }
    ]
}
