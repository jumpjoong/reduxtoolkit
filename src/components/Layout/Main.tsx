import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { plus } from "../../store/couterSlice";
import "./main.scss";
function Main() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <section className="section01">
      <button onClick={() => dispatch(plus())}>증가시키기</button>
      <p>{count}</p>
    </section>
  );
}

export default Main;
