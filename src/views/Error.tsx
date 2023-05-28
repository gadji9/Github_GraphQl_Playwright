import { Link } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const Error = () => {
  return (
    <div className="misc-wrapper">
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Страница не найдена 🕵🏻‍♀️</h2>
          <p className="mb-2">Ой! 😖 Запрашиваемый вами адерс не существует</p>
          <Link to="/" className="btn-sm-block mb-2">
            Домой
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
