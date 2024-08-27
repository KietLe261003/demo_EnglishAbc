import { IConCall, IConEmail } from "../../Common/Icon/Icon";

interface ProfileCardProps {
    name: string,
    description: string,
    role: string,
    avatar: string
}
const ProfileCard:React.FC<ProfileCardProps> = ({name="Quốc trung", description= "Học ngu các kiểu", role= "teacher",avatar="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=yQ-kKmUAAAAJ&citpid=1"}) => {
  return (
    <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl max-w-[430px] bg-slate-300 text-center shadow">
      <div className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          src={avatar}
          alt=""
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">
            {description}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex uppercase items-center rounded-full bg-black px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-green-600/20">
              {role}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href="mailto:najibgafar@gmail.com"
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <IConEmail></IConEmail>
              Email
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href="tel:+4407393145546"
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <IConCall></IConCall>
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
