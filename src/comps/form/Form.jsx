import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/FormSchema";

const textInputClassName =
  " border border-gray-300 text-gray-900 text-sm block p-2.5   dark:text-white";

function Form() {
  const { handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandle = (data) => {
    console.log(data);
  };
  return (
    <div className="md:w-[700px] shadow-sm shadow-white bg-white mx-auto px-7 py-4 rounded-xl p-10 m-10">
      <form
        onSubmit={handleSubmit(formSubmitHandle)}
        className="w-full justify-center"
      >
        <div>
          <div>
            <h1
              htmlFor="email"
              className="block mb-2 text-xl font-bold text-center text-gray-900 dark:text-gray-300"
            >
              Admission Slip/Fee Voucher
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="block mt-2 text-sm w-[20%] font-medium text-gray-900 dark:text-gray-300"
            >
              Student Name
            </label>
            <input
              name="Name"
              type="text"
              id="name"
              placeholder="Please Enter Your Name"
              className={textInputClassName}
            />
          </div>
          <div className="mb-6 flex">
            <label className="mt-2 mr-1 text-sm w-[20%] font-medium text-gray-900 dark:text-gray-300">
              Voucher No
            </label>
            <input
              name="number"
              type="text"
              id="number"
              placeholder="Please Enter Your Voucher No"
              className={textInputClassName}
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-6 flex">
            <label className="block mt-2 text-sm w-[20%] font-medium text-gray-900 dark:text-gray-300">
              CNIC No
            </label>
            <input
              name="CnicNo:"
              type="text"
              id="cnicno:"
              placeholder="Please Enter Your CNIC No"
              className={textInputClassName}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="mt-2 mr-1 text-sm w-[30%] font-medium text-gray-900 dark:text-gray-300 ml-[25px]"
            >
              Due Date:
            </label>
            <input
              name="number"
              type="date"
              id="number"
              className={textInputClassName}
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="block mt-2 text-sm w-[20%] font-medium text-gray-900 dark:text-gray-300"
            >
              Father Name
            </label>
            <input
              name="Name"
              type="text"
              id="name"
              placeholder="Please Enter Your Father Name"
              className={textInputClassName}
            />
          </div>
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="mt-2 mr-1 text-sm w-[30%] font-medium text-gray-900 dark:text-gray-300"
            >
              Issue Date:
            </label>
            <input
              name="number"
              type="date"
              id="number"
              className={textInputClassName}
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="block mt-2 text-sm w-[20%] font-medium text-gray-900 dark:text-gray-300"
            >
              Program Title
            </label>
            <input
              name="Name"
              type="text"
              id="name"
              placeholder="Please Enter Your Program Title"
              className={textInputClassName}
            />
          </div>
          <div className="mb-6 flex">
            <label
              htmlFor="password"
              className="block mt-2 text-sm w-[30%] font-medium text-gray-900 dark:text-gray-300"
            >
              Semester:
            </label>
            <input
              name="Name"
              type="text"
              id="name"
              placeholder="Please Enter Your Semester"
              className={textInputClassName}
              style={{ marginLeft: "2px" }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 w-[80%] text-center">Description</th>
                <th className="py-3 px-6 text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  Admission Fee <span className=" font-bold">(Once)</span>
                </td>
                <td className="py-3 px-6 text-left">50,000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  Registration Fee
                  <span className=" font-bold">
                    (Once, As Per GCUF Sechudle)
                  </span>
                </td>
                <td className="py-3 px-6 text-center">-</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  Examination Fee
                  <span className=" font-bold">
                    (As Per Semester GCUF Sechudle)
                  </span>
                </td>
                <td className="py-3 px-6 text-center">-</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  Registration Fee
                  <span className=" font-bold">
                    (Once, As Per BISE Faisalabad Sechudle)
                  </span>
                </td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  Examination Fee
                  <span className=" font-bold">
                    (As Per BISE Faisalabad Sechudle)
                  </span>
                </td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Semester Fee</td>
                <td className="py-3 px-6 text-left">25,000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Tuition Fee</td>
                <td className="py-3 px-6 text-left">3000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Hostel Charges</td>
                <td className="py-3 px-6 text-left">500</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Transport Fee</td>
                <td className="py-3 px-6 text-left">4,500</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Annual Stationary Funds</td>
                <td className="py-3 px-6 text-left">3000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Annual Sports Funds</td>
                <td className="py-3 px-6 text-left">500</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Late Fee Fine</td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Total Fee</td>
                <td className="py-3 px-6 text-left">45,000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Scholorship/ Concession</td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Payable Amount:</td>
                <td className="py-3 px-6 text-left">45,000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">PAYMANET TERMS</td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
              <tr className="border-b border-gray-200  hover:bg-gray-100">
                <td colSpan="2" className="py-3 px-6">
                  <p>
                    In case of any query/ correction in fee voucher, concerned
                    Students or His/ Her Guardian should visit the accout office
                    before Due Date otherwise the fee voucher will be considered
                    finalized and student will be liable to pay the dues
                    mentioned in voucher. Fee must be deposited between 8:00
                    A.M. to 5.00 P.M. in working days. Fee must be deposited in
                    prescribed Account Officer, for online payment students can
                    send their cash to the offical Jazz Cash OR Easypaisa
                    Account Mentioned on the voucher. After paying dues online
                    Students must note the TID No on the printed voucher and the
                    snap of voucher should be sent to the official WhatsApp No
                    given on the voucher.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="submit"
          className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
