export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input type="text" placeholder="Enter your name" id="name" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
