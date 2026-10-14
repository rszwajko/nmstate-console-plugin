export const findConditionType = (
  conditions: { type: string; status: string; message?: string }[] | undefined,
  conditionType: string,
) =>
  conditions?.find(
    (condition) => condition?.type === conditionType && condition?.status === 'True',
  );
