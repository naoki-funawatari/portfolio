import React from 'react';

const Main = props => {
  return (
    <main>
      <h2>This is main</h2>
      <section className="post-list">
        <article className="post">
          <h3 className="post-title">What is Lorem Ipsum?</h3>
          <div className="post-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        </article>
        <article className="post">
          <h3 className="post-title">What is Lorem Ipsum?</h3>
          <div className="post-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        </article>
      </section>
    </main>
  );
}

export default Main;