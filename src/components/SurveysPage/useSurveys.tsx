"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import { gql } from "@apollo/client";

interface IFormInput {
  name: string;
  selectComponent: string;
  recipients: string;
  isSendRecipients: boolean;
  deadlineDate: Date | null;
  note?: string;
}

const MUTATION_EXAMPLE = gql`
  mutation MyMutation(
    $name: String!
    $selectComponent: String!
    $recipients: String!
    $isSendRecipients: Boolean!
    $deadlineDate: String!
    $note: String
  ) {
    UpdateUser(
      about: $name
      rowOrder: $selectComponent
      profileColor: $recipients
      donatorBadge: $deadlineDate
      airingNotifications: $isSendRecipients
      timezone: $note
    ) {
      id
    }
  }
`;

const surveySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  selectComponent: Yup.string().required("Select one of the options"),

  recipients: Yup.string().required("Recipients Category is required"),

  isSendRecipients: Yup.boolean()
    .required()
    .oneOf([true], "Checkbox must be checked"),

  deadlineDate: Yup.date().required("Deadline date is required").nullable(),

  note: Yup.string(),
});
const useSurveys = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(surveySchema),
  });
  const [updateUser] = useMutation<
    IFormInput,
    {
      name: string;
      selectComponent: string;
      recipients: string;
      isSendRecipients: boolean;
      deadlineDate: string;
      note?: string;
    }
  >(MUTATION_EXAMPLE);

  const onSubmit = async (data: IFormInput) => {
    await updateUser({
      variables: {
        name: data.name,
        note: data.note,
        deadlineDate: data.deadlineDate?.toString()!,
        isSendRecipients: data.isSendRecipients,
        recipients: data.recipients,
        selectComponent: data.selectComponent,
      },
      onCompleted: () => {},
      onError: () => {},
    });
  };

  return {
    errors,
    handleSubmit,
    onSubmit,
    control,
  };
};

export default useSurveys;
