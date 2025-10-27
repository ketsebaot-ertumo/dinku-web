export interface Office {
  city: string;
  email: string;
  phone: string;
  address: string;
}


interface Props {
  offices: Office[];
}

export default function OfficeList({ offices }: Props) {
  return (
    <div className="space-y-4">
      {offices.map((office, idx) => (
        <div key={idx} className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold text-xl">{office.city}</h3>
          <p>Email: <a href={`mailto:${office.email}`} className="text-primary">{office.email}</a></p>
          <p>Phone: {office.phone}</p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}
