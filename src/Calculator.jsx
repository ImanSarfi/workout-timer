function Calculator() {
  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select>
            <option value="">Full-body workout (6 exercises)</option>
            <option value="">Arm + Leg (4 exercises)</option>
            <option value="">Arms only (6 exercises)</option>
            <option value="">Leags only (6 exercises)</option>
            <option value="">Core only (6 exercises)</option>

          </select>
        </div>
        <div>
          <label> How many sets</label>
          <input type="range" min={1} max={6} />
          <span>5</span>
        </div>
        <div>
          <label>How fast Are you</label>
          <input type="range" min={1} max={6} />
          <span>3</span>
        </div>
        <div>
          <label>Break length</label>
          <input type="range" min={1} max={6} />
          <span>3</span>
        </div>
      </form>
      <section>
        <button>+</button>
        <p>46 : 00</p>
        <button>+</button>
      </section>
    </>
  );
}

export default Calculator;
