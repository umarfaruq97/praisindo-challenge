import moment from 'moment';

export default function Card({ item }) {
  return (
    <div className="p-4 rounded-md border border-gray-400 shadow-sm">
      <h2 className="text-xl font-semibold text-black/80 mb-2">
        {item.headline.main}
      </h2>
      <p className="text-sm text-black/60 font-medium mb-2">
        {item.byline.original}
      </p>
      <p className="text-xs text-gray-500 mb-4">
        {moment(item.pub_date).format('MMM DD, YYYY')}
      </p>
      <p className="text-sm text-black font-medium">{item.snippet}</p>
    </div>
  );
}
