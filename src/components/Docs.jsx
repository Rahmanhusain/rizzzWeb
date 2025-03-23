import React, { useState } from "react";
import { CopyIcon } from "../icons/icon";

function Docs() {
  const [toast, setToast] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast("Copied to clipboard! ✅");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section id="docs" className="min-h-screen bg-gray-900 text-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Rizzz Documentation 📜
        </h1>

        {/* Section: Overview */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🌐 Overview
          </h2>
          <p className="text-gray-300">
            Rizzz is a scripting language designed for fun and ease. It’s
            interpreted by a standalone executable (rizzz.exe), built with
            Python and packaged with PyInstaller, so no Python installation is
            needed. Key features:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Simple, English-like syntax with a desi twist.</li>
            <li>
              Support for variables, arithmetic, loops, conditionals, arrays,
              and string concatenation.
            </li>
            <li>
              Two modes: Normal (clean output) and WTF Mode (spicy error
              messages).
            </li>
            <li>Runs on Windows via a command-line interface.</li>
          </ul>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Installation */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            💾 Installation (For now its available in windows only)
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Getting Started
          </h3>
          <div className="mt-3">
          <div className="rounded-lg overflow-hidden border border-gray-800">
            <video
              className="w-full"
              controls
            >
              <source src="/setup/tutorialrizz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
          <ol className="list-decimal list-inside mt-2 text-gray-300">
            <li>
              Download: rizzz_setup.exe from Rahman Husain (that’s me!).
            </li>
            <li>
              Install:
              <ul className="list-disc list-inside ml-4">
                <li>Double-click rizzz_setup.exe.</li>
                <li>
                  Follow the wizard: accept the license, choose a directory
                  (default: C:\Program Files\Rizzz), and tick “Add Rizzz to
                  system PATH” (recommended).
                </li>
                <li>Click “Finish” when done.</li>
                <li>Windows may give a security warining if occurs:</li>
                <li>Click "More info" then "Run anyway"</li>
                <li>For more understanding watch video tutorial.</li>
              </ul>
            </li>
            <li>
              Restart PC (<span className="text-red-500">Important!</span>): 
              <ul className="list-disc list-inside ml-4">
                <li>Restart required after installing the interpreter.</li>
              </ul>
            </li>
            <li>
              Verify:
              <ul className="list-disc list-inside ml-4">
                <li>Open CMD or PowerShell.</li>
                <li>
                  Type <code>rizzz --version</code>
                </li>
              </ul>
            </li>
          </ol>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Prerequisites
          </h3>
          <p className="mt-2 text-gray-300">
            None! The installer provides full environment setup.
          </p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Running a Program
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Write your code in a .rizzz file (e.g., test.rizzz).</li>
            <li>
              Run it:
              <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
                <pre className="text-green-300 text-sm overflow-auto">{`rizzz test.rizzz          // Normal mode`}</pre>
                <button
                  className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
                  onClick={() => copyToClipboard("rizzz test.rizzz")}
                >
                  <CopyIcon className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
                <pre className="text-green-300 text-sm overflow-auto">{`rizzz test.rizzz wtfmode  // WTF mode with extra sass`}</pre>
                <button
                  className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
                  onClick={() => copyToClipboard("rizzz test.rizzz wtfmode")}
                >
                  <CopyIcon className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </li>
          </ul>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Basic Structure */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🏗️ Basic Structure
          </h2>
          <p className="mt-2 text-gray-300">Every Rizzz program must:</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Start with{" "}
              <code>
                <span className="text-blue-500">less_go</span>
              </code>{" "}
              (like main()).
            </li>
            <li>
              End with{" "}
              <code>
                <span className="text-blue-500">bye_bye</span>
              </code>{" "}
              (closes the program).
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Lines are whitespace-sensitive (indentation matters for blocks).
            </li>
            <li>No semicolons—keep it chill.</li>
            <li>
              Comments start with <code>//</code>.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Example</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    say "Hello, yaar!"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard('less_go\n    say "Hello, yaar!"\nbye_bye')
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">Output: Hello, yaar!</p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Variables */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            📦 Variables
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Declaration
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Assign variables with <code>=</code>.
            </li>
            <li>
              No explicit types—Rizzz infers them (int, string, or array).
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">{`variable_name = value`}</pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() => copyToClipboard("variable_name = value")}
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            <code>value</code> can be a number, string (in quotes), or array
            ([]).
          </p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Examples</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    x = 5\n    name = "Rahman"\n    say "My name is <name> and I’m <x> times cooler!"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    x = 5\n    name = "Rahman"\n    say "My name is <name> and I’m <x> times cooler!"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            Output: My name is Rahman and I’m 5 times cooler!
          </p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Operators */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🔢 Operators
          </h2>
          <p className="mt-2 text-gray-300">
            Rizzz supports arithmetic, comparison, and string concatenation
            operators.
          </p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Arithmetic Operators
          </h3>
          <table className="mt-2 text-gray-300 text-sm w-full border-collapse border border-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-700 p-2">Operator</th>
                <th className="border border-gray-700 p-2">Description</th>
                <th className="border border-gray-700 p-2">Example</th>
                <th className="border border-gray-700 p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>+</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Addition (or string concatenation)
                </td>
                <td className="border border-gray-700 p-2">
                  <code>x = 5 + 3</code> or <code>x = "a" + "b"</code>
                </td>
                <td className="border border-gray-700 p-2">8 or "ab"</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>-</code>
                </td>
                <td className="border border-gray-700 p-2">Subtraction</td>
                <td className="border border-gray-700 p-2">
                  <code>x = 10 - 4</code>
                </td>
                <td className="border border-gray-700 p-2">6</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>*</code>
                </td>
                <td className="border border-gray-700 p-2">Multiplication</td>
                <td className="border border-gray-700 p-2">
                  <code>x = 2 * 3</code>
                </td>
                <td className="border border-gray-700 p-2">6</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>/</code>
                </td>
                <td className="border border-gray-700 p-2">Division</td>
                <td className="border border-gray-700 p-2">
                  <code>x = 10 / 2</code>
                </td>
                <td className="border border-gray-700 p-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>++</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Increment (postfix)
                </td>
                <td className="border border-gray-700 p-2">
                  <code>x = 1; x++</code>
                </td>
                <td className="border border-gray-700 p-2">2</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Comparison Operators
          </h3>
          <table className="mt-2 text-gray-300 text-sm w-full border-collapse border border-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-700 p-2">Operator</th>
                <th className="border border-gray-700 p-2">Description</th>
                <th className="border border-gray-700 p-2">Example</th>
                <th className="border border-gray-700 p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>&lt;</code>
                </td>
                <td className="border border-gray-700 p-2">Less than</td>
                <td className="border border-gray-700 p-2">
                  <code>5 &lt; 10</code>
                </td>
                <td className="border border-gray-700 p-2">True</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>&gt;</code>
                </td>
                <td className="border border-gray-700 p-2">Greater than</td>
                <td className="border border-gray-700 p-2">
                  <code>10 &gt; 5</code>
                </td>
                <td className="border border-gray-700 p-2">True</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>&lt;=</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Less than or equal
                </td>
                <td className="border border-gray-700 p-2">
                  <code>5 &lt;= 5</code>
                </td>
                <td className="border border-gray-700 p-2">True</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>&gt;=</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Greater than or equal
                </td>
                <td className="border border-gray-700 p-2">
                  <code>10 &gt;= 15</code>
                </td>
                <td className="border border-gray-700 p-2">False</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>==</code>
                </td>
                <td className="border border-gray-700 p-2">Equal to</td>
                <td className="border border-gray-700 p-2">
                  <code>5 == 5</code>
                </td>
                <td className="border border-gray-700 p-2">True</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>!=</code>
                </td>
                <td className="border border-gray-700 p-2">Not equal to</td>
                <td className="border border-gray-700 p-2">
                  <code>5 != 3</code>
                </td>
                <td className="border border-gray-700 p-2">True</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Logical Operators
          </h3>
          <table className="mt-2 text-gray-300 text-sm w-full border-collapse border border-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-700 p-2">Operator</th>
                <th className="border border-gray-700 p-2">Description</th>
                <th className="border border-gray-700 p-2">Example</th>
                <th className="border border-gray-700 p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>and</code>
                </td>
                <td className="border border-gray-700 p-2">Logical AND</td>
                <td className="border border-gray-700 p-2">
                  <code>true and false</code>
                </td>
                <td className="border border-gray-700 p-2">false</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>or</code>
                </td>
                <td className="border border-gray-700 p-2">Logical OR</td>
                <td className="border border-gray-700 p-2">
                  <code>true or false</code>
                </td>
                <td className="border border-gray-700 p-2">true</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>xor</code>
                </td>
                <td className="border border-gray-700 p-2">Logical XOR</td>
                <td className="border border-gray-700 p-2">
                  <code>true xor false</code>
                </td>
                <td className="border border-gray-700 p-2">true</td>
              </tr>
            </tbody>
          </table>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: String Concatenation */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              🔗 String Concatenation
            </h2>
            <h3 className="text-xl font-medium text-blue-300 mt-4">
              String Concatenation Operator
            </h3>
            <table className="mt-2 text-gray-300 text-sm w-full border-collapse border border-gray-700">
              <thead>
                <tr>
            <th className="border border-gray-700 p-2">Operator</th>
            <th className="border border-gray-700 p-2">Description</th>
            <th className="border border-gray-700 p-2">Example</th>
            <th className="border border-gray-700 p-2">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
            <td className="border border-gray-700 p-2">
              <code>+</code>
            </td>
            <td className="border border-gray-700 p-2">
              Concatenates strings
            </td>
            <td className="border border-gray-700 p-2">
              <code>x = "Hello" + " Ritchie"</code>
            </td>
            <td className="border border-gray-700 p-2">"Hello Ritchie"</td>
                </tr>
                <tr>
            <td className="border border-gray-700 p-2">
              <code>+</code>
            </td>
            <td className="border border-gray-700 p-2">
              Concatenates strings inside <code>say</code>
            </td>
            <td className="border border-gray-700 p-2">
              <code>say "my name is &lt;firstname + ' Husain'&gt;"</code>
            </td>
            <td className="border border-gray-700 p-2">"my name is Rahman Husain"</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-gray-300">
              Notes:
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>
            <code>+</code> works for both numbers (addition) and strings
            (concatenation), depending on the operands.
                </li>
                <li>
            Use outside <code>say</code> to build strings, or inside{" "}
            <code>say</code> with <code>&lt;&gt;</code> for variable
            substitution.
                </li>
              </ul>
            </p>
            <hr className="my-6 border-gray-700" />
          </section>

          {/* Section: Input/Output */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            📥 Input/Output
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Output (say)
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Prints text or variable values.</li>
            <li>
              Use <code>&lt;variable&gt;</code> to embed variables in strings
              (implicit concatenation).
            </li>
            <li>Supports direct string output with quotes.</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">{`say "text"`}</pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() => copyToClipboard('say "text"')}
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">{`say "<variable>"`}</pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() => copyToClipboard('say "<variable>"')}
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">{`say "text <variable>"`}</pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() => copyToClipboard('say "text <variable>"')}
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            String Concatenation Inside say
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Use <code>&lt;variable&gt;</code> to insert variable values into a
              string, effectively concatenating them with surrounding text.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Example</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    first = "Rahman"\n    last = "Husain"\n    say "Full name: <first> <last>"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    first = "Rahman"\n    last = "Husain"\n    say "Full name: <first> <last>"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">Output: Full name: Rahman Husain</p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Input (gimme)
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Prompts the user for input and stores it in a variable.</li>
            <li>
              Input is treated as a string unless it’s a pure number
              (auto-converted to int).
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">{`variable = gimme "prompt message"`}</pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard('variable = gimme "prompt message"')
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example with Concatenation
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    name = gimme "What’s your name, yaar?"\n    greeting = "Yo, " + name + "!"\n    say "<greeting>"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    name = gimme "What’s your name?"\n    greeting = "Yo, " + name + "!"\n    say "<greeting>"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            Input: Ritchie
            <br />
            Output:
            <br />
            What’s your name? Ritchie
            <br />
            Yo, Ritchie!
          </p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Control Flow */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🔄 Control Flow
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            If Statements
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Conditional execution with <code>if</code>, <code>else if</code>,
              and <code>else</code>.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`if condition {\n    // code\n} else if condition {\n    // code\n} else {\n    // code\n}`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  "if condition {\n    // code\n} else if condition {\n    // code\n} else {\n    // code\n}"
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example with Concatenation
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    x = 10\n    if x > 5 {\n        say "<x> is big!"\n    } else {\n        say "<x> is small!"\n    }\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    x = 10\n    if x > 5 {\n        say "<x> is big!"\n    } else {\n        say "<x> is small!"\n    }\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">Output: x is big!</p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Repeat Loop (For Loop)
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Loops from a start value to an end value.</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`repeat variable = start to end {\n    // code\n}`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  "repeat variable = start to end {\n    // code\n}"
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example with Concatenation
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    repeat i = 1 to 3 {\n        say "Loop <i>"\n    }\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    repeat i = 1 to 3 {\n        say "Loop <i>"\n    }\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            Output:
            <br />
            Loop 1
            <br />
            Loop 2
            <br />
            Loop 3
          </p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Keep Going Loop (While Loop)
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Loops while a condition is true.</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`keep_going condition {\n    // code\n}`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard("keep_going condition {\n    // code\n}")
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example with Concatenation
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    x = 0\n    keep_going x < 3 {\n        say "x is <x>"\n        x++\n    }\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    x = 0\n    keep_going x < 3 {\n        say "x is <x>"\n        x++\n    }\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            Output:
            <br />
            x is 0
            <br />
            x is 1
            <br />x is 2
          </p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Arrays */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            📦 Arrays
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Declaration
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Create an empty array with <code>[]</code>.
            </li>
            <li>Assign values using indexing.</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Syntax</h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`array_name = []               //Empty array\narray_name[index] = value    //Assign value at index`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard("array_name = []\narray_name[index] = value")
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Arrays grow dynamically as you assign indices.</li>
            <li>
              Access elements with <code>array_name[index]</code>.
            </li>
            <li>
              Concatenate array elements with strings using <code>+</code> or{" "}
              <code>&lt;&gt;</code> in <code>say</code>.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example with Concatenation
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    nums = []\n    nums[0] = 10\n    nums[1] = 20\n    say "First: <nums[0]> , Second: <nums[1]>"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    nums = []\n    nums[0] = 10\n    nums[1] = 20\n    say "First: <nums[0]> , Second: <nums[1]>"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">Output: First: 10, Second: 20</p>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Input into Arrays
          </h3>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    names = []\n    names[0] = gimme "Enter first name:"\n    names[1] = gimme "Enter second name:"\n    say "<names[0]> and <names[1]> are buddies!"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    names = []\n    names[0] = gimme "Enter first name:"\n    names[1] = gimme "Enter second name:"\n    say "<names[0]> and <names[1]> are buddies!"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: WTF Mode */}
        <section id="wtfmode" className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🌶️ WTF Mode
          </h2>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            What It Does
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Adds spicy, desi-flavored error messages and a cheeky success
              note.
            </li>
            <li>
              Activate with <code>wtfmode</code> flag:{" "}
              <code>rizzz test.rizzz wtfmode</code>.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">
            Example Output
          </h3>
          <h4 className="text-xl font-medium text-blue-300 mt-4">
            Normal Mode Error
          </h4>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`Error at line 3: Unclosed block(s) in program\nProgram terminated with exit code 1`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  "Error at line 3: Unclosed block(s) in program\nProgram terminated with exit code 1"
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h4 className="text-xl font-medium text-blue-300 mt-4">
            WTF Mode Error
          </h4>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`Error: Line 3: You forgot to close your damn block just like wo tera kaat k tujhe bhool gyi/gya!\nProgram fail ho gya just like you failed her/him, exit code 1!`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  "Error: Line 3: You forgot to close your damn block just like wo tera kaat k tujhe bhool gyi/gya!\nProgram fail ho gya just like you failed her/him, exit code 1!"
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <h4 className="text-xl font-medium text-blue-300 mt-4">
            WTF Mode Success
          </h4>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`Bloody hell, your code ran without error. Exit code 0`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  "Bloody hell, your code ran without error. Exit code 0"
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Error Handling */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🛑 Error Handling
          </h2>
          <p className="mt-2 text-gray-300">
            Rizzz catches common errors and reports them:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Missing <code>less_go</code>/<code>bye_bye</code>: Program must
              start and end properly.
            </li>
            <li>
              Unclosed Blocks: Every <code>{"{"}</code> needs a{" "}
              <code>{"}"}</code>.
            </li>
            <li>
              Undefined Variables: Can’t use a variable before declaring it.
            </li>
            <li>Invalid Array Index: Must be a non-negative integer.</li>
            <li>
              Invalid Concatenation: Mixing strings and numbers with{" "}
              <code>+</code> without conversion fails (e.g., "a" + 5 errors).
            </li>
          </ul>
          <h3 className="text-xl font-medium text-blue-300 mt-4">Example</h3>
          <h4 className="text-xl font-medium text-blue-300 mt-4">
            Invalid Concatenation
          </h4>
          <div className="relative bg-gray-800 p-3 rounded-lg mt-3 flex justify-between items-center">
            <pre className="text-green-300 text-sm overflow-auto">
              {`less_go\n    x = "Number: " + 42  //Error: Can’t concatenate string and number directly\n    say "<x>"\nbye_bye`}
            </pre>
            <button
              className="bg-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-600 absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  'less_go\n    x = "Number: " + 42  //Error: Can’t concatenate string and int directly\n    say "<x>"\nbye_bye'
                )
              }
            >
              <CopyIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-gray-300">
            Output (Normal Mode):
            <br />
            Error at line 2: Invalid expression 'Number: + 42' - unsupported
            operand type(s) for +: 'str' and 'int'
            <br />
            Program terminated with exit code 1
          </p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: Tips for Use */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            💡 Tips for Use
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              String Concatenation: Use <code>+</code> outside <code>say</code>,
              or <code>&lt;&gt;</code> inside <code>say</code> for variables.
              Numbers need to be in strings for concatenation{" "}
              {"(e.g., Num:  + <x>)"}.
            </li>
            <li>
              Indentation: Use spaces (not tabs) for blocks—2 or 4 spaces work
              best.
            </li>
            <li>
              File Names: End with <code>.rizzz</code> (e.g., cool.rizzz).
            </li>
            <li>
              Debugging: Start with normal mode, switch to <code>wtfmode</code>{" "}
              for laughs.
            </li>
          </ul>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Section: License */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            📜 License
          </h2>
          <p className="mt-2 text-gray-300">
            Copyright © 2025 Rizzz developed by Rahman husain Aka Ritchie. Free to use. Have fun with experiments!
          </p>
          <hr className="my-6 border-gray-700" />
        </section>

        {/* Toast Notification */}
        {toast && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-900 border border-green-600 text-green-300 px-4 py-2 rounded shadow-md text-sm animate-fadeIn">
            {toast}
          </div>
        )}
      </div>
    </section>
  );
}

export default Docs;
