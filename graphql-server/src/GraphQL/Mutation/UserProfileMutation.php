<?php

namespace App\GraphQL\Mutation;

use Overblog\GraphQLBundle\Definition\Resolver\AliasedInterface;
use Overblog\GraphQLBundle\Definition\Resolver\MutationInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UserProfileMutation implements MutationInterface, AliasedInterface
{
    public function update(string $name, UploadedFile $pictureFile): array
    {
        // Add your business logic for the $name and $pictureFile variables
        // Eg. Persist user in database and upload the file to AWS S3

        return [
            'name'     => $name,
            'filename' => $pictureFile->getClientOriginalName(),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public static function getAliases(): array
    {
        return [
            'update' => 'updateUserProfile',
        ];
    }
}
