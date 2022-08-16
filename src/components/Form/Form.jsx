export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const submission = Object.fromEntries(new FormData(event.target));
    console.log(submission);
  };

  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          className="rounded border pl-2"
          name="name"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
