function Calculator() {
  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select>
            <option value="">Arm + Leg (6 exercises)</option>
            <option value="">Arm + Leg (6 exercises)</option>
            <option value="">Arm + Leg (6 exercises)</option>
            <option value="">Arm + Leg (6 exercises)</option>
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
