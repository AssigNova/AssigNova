// components/landing/GoogleReviewsWidget.jsx
export default function GoogleReviewsWidget() {
  return (
    <div className="space-y-8">
      {/* Method A: Elfsight Widget (Recommended) */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
        {/* <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-blue-400 mr-2">★</span>
          Google Reviews Widget
        </h3> */}
        <script
          type="text/javascript"
          src="https://grwapi.net/widget.min.js"
          async
        ></script>
        <div
          className="review-widget_net"
          data-uuid="82ba6058-77e7-443f-86bb-ebab610c32c9"
          data-template="10"
          data-lang="en"
          data-theme="light"
        >
          Unable to load widget
        </div>
        <code className="block mt-4 p-3 bg-black/50 rounded text-sm text-gray-300">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-2b60b8c2-ce5c-4472-a850-60127e99bfe0"
            data-elfsight-app-lazy
          ></div>
        </code>
      </div>
    </div>
  );
}
