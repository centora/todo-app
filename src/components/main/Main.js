import { Loader } from '../loader';
import './main.scss';

export const Main = (
  {
    loading,
    children
  }
) => (
  <main className="main">
    {
      loading
        ? (
          <Loader show={loading} />
        )
        : (
          <>
            <div className="content">
              {children}
            </div>
          </>
        )
    }
  </main>
);
